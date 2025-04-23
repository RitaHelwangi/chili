import React, { useEffect, useState } from 'react';
import { pizzaMenu } from '../data/menuStore.js';
import './Addpizzaitem.css';
import Joi from 'joi';

const AddPizzaForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [menu, setMenu] = useState(pizzaMenu);

  const pizzaSchema = Joi.object({
    name: Joi.string().min(2).required().label('Name'),
    image: Joi.string().pattern(/^(http|https):\/\//).required().label('Image URL'),
    price: Joi.number().positive().required().label('Price'),
    description: Joi.string().min(5).required().label('Description'),
    ingredients: Joi.array().items(Joi.string().min(1)).required().label('Ingredients'),
  });

  // Validation function
  const validateForm = () => {
    const preparedIngredients = ingredients
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    const newPizza = {
      name,
      image,
      price: Number(price),
      description,
      ingredients: preparedIngredients,
    };
    console.log('New pizza object created:', newPizza);
    console.log('Before adding, menu has', menu.length, 'items');

    const { error } = pizzaSchema.validate(newPizza, { abortEarly: false });

    if (!error) {
      setErrors({});
      return true;
    }

    const errorObj = {};
    error.details.forEach(err => {
      const field = err.path[0];
      errorObj[field] = err.message;
    });
    setErrors(errorObj);
    return false;
  };

  // Revalidate on field change
  useEffect(() => {
    validateForm();
  }, [name, image, price, description, ingredients]);

  const handleAddPizza = () => {
    if (!validateForm()) return;

    const newPizza = {
      id: crypto.randomUUID(),
      name,
      image,
      price: Number(price),
      description,
      ingredients: ingredients.split(',').map(item => item.trim()),
      alt: `${name} pizza`,
    };

    const updatedMenu = [...menu, newPizza]
    console.log('New pizza object created:', newPizza);
    console.log('Before adding, menu has', menu.length, 'items');

    setMenu(prev => [...prev, newPizza]);

    console.log('after adding, menu has', updatedMenu.length, 'items')
    console.log('Updated menu:', updatedMenu)
    // Reset form
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setIngredients('');
    setTouched({});
    console.log('Form reset complete')
  };

  const isFormValid = () => {
    const hasErrors = Object.keys(errors).length > 0;

    const allFieldsFilled =
      name.trim() &&
      image.trim() &&
      description.trim() &&
      ingredients.trim() &&
      !isNaN(Number(price)) &&
      Number(price) > 0;

    return allFieldsFilled && !hasErrors;
  };

  return (
    <div className='add-food-div'>
      <section className='add-food-input'>
        <h2 className='h2-add-food'>Add new Food</h2>

        <label>Name:</label>
        <input
          className='input-field-add'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
        />
        {touched.name && errors.name && <p className='error-text'>{errors.name}</p>}

        <label>Picture:</label>
        <input
          className='input-field-add'
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, image: true }))}
        />
        {touched.image && errors.image && <p className='error-text'>{errors.image}</p>}

        <label>Price:</label>
        <input
          className='input-field-add'
          type='text'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, price: true }))}
        />
        {touched.price && errors.price && <p className='error-text'>{errors.price}</p>}

        <label>Description:</label>
        <input
          className='input-field-add'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, description: true }))}
        />
        {touched.description && errors.description && (
          <p className='error-text'>{errors.description}</p>
        )}

        <label>Ingredients:</label>
        <input
          className='input-field-add'
          type='text'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, ingredients: true }))}
        />
        {touched.ingredients && errors.ingredients && (
          <p className='error-text'>{errors.ingredients}</p>
        )}

        <button
          className='add-new-food-item'
          onClick={handleAddPizza}
          disabled={!isFormValid()}
        >
          Add
        </button>
      </section>

      <p>Current menu items: {menu.length}</p>
    </div>
  );
};

export default AddPizzaForm;