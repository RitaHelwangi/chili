function FormStructure ({formData, error, touched, handleChange, handleBlur,  isFormValid}){


	return(
		<form>
			<div>
				<label>User Name:</label>
				<input
				type="text"
				value={formData.username}
				name="username"
				onChange={handleChange}
				onBlur={handleBlur}
				/>
				{touched.username && error.username && (<small className="error">{error.username}</small>)}
			</div>

			<div>
				<label>Email:</label>
				<input
				type="text" 
				value={formData.email} 
				name="email" 
				onChange={handleChange}
				onBlur={handleBlur}
				/>
				{touched.email && error.email && (<small className="error">{error.email}</small>)}
			</div>
				
			

			<div>
				<label>Password:</label>
				<input
				type="password" 
				value={formData.password} 
				name="password" 
				onChange={handleChange}
				onBlur={handleBlur}
				/>
				{touched.password && error.password && (<small className="error">{error.password}</small>)}
				  
				
			</div>

			<button type="submit" disabled={!isFormValid()}>
				Log In
			</button>
		</form>
	)
}

export default FormStructure