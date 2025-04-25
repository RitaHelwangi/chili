
import FormStructure from "./FormStructure";
import { useState } from "react";
import Joi from "joi";
import "./form.css";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
	// username: Joi.string().min(4).required().label("username"),
	// email: Joi.string().email({tlds: {allow: false} }).required().label("email"),
	password: Joi.string().valid("mums").required().label("password"),
});

function Form() {
	const [formData, setFormData] = useState({
		// username: "",
		// email: "",
		password: "",
	});

	const [touched, setTouched] = useState({
		// username: false,
		// email: false,
		password: false,
	});

	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted!");

		if (isFormValid()) {
			navigate("/empty");
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleBlur = (event) => {
		const { name, value } = event.target;
		setTouched((prev) => ({
			...prev,
			[name]: true,
		}));

		const fieldSchema = schema.extract(name);
		const { error } = fieldSchema.validate(value);

		let message = "";
		if (error) {
			// if (name === "username") message = "username too short";
			// if (name === "email") message = "email incorrect";
			if (name === "password") message = "password incorrect";
		}

		setErrors((prev) => ({
			...prev,
			[name]: message,
		}));
	};

	const isFormValid = () => {
		const { error } = schema.validate(formData, { abortEarly: false });
		console.log("Validation error", error);
		return !error;
	};

	return (
		<FormStructure
			formData={formData}
			error={errors}
			handleChange={handleChange}
			isFormValid={isFormValid}
			handleBlur={handleBlur}
			touched={touched}
			handleSubmit={handleSubmit}
		/>
	);
}

export default Form;