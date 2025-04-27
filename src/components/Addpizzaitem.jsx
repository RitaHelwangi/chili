import React, { useEffect, useState } from 'react';
import { loadFromApi, saveMenu } from '../data/api.js';
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
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load menu data from API when component mounts
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const apiData = await loadFromApi();
        setMenu(apiData || []);
      } catch (error) {
        console.error("Error loading menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const pizzaSchema = Joi.object({
    name: Joi.string().min(2).required().messages({
      'string.empty': 'Pizza name cannot be empty',
      'string.min': 'Pizza name 2 characters long',
      'any.required': 'Pizza name is required'
    }).label('Name'),
    image: Joi.string().pattern(/^(http|https):\/\//).required().messages({
      'string.empty': 'URL cannot be empty',
      'string.pattern.base': 'URL start with http://',
      'any.required': 'Image URL is required'
    }).label('Image URL'),
    
    price: Joi.number().positive().required().messages({
      'number.base': 'Price must be a valid number',
      'number.positive': 'Price must be greater than zero',
      'any.required': 'Price is required'
    }).label('Price'),
    
    description: Joi.string().required().messages({
      'string.empty': 'Description cannot be empty',
      'any.required': 'Description is required'
    }).label('Description'),
    
    ingredients: Joi.string().min(2).required().messages({
      'string.empty': 'Ingredients name cannot be empty',
      'string.min': 'Ingredients name 2 characters long',
      'any.required': 'Ingredients name is required'
    }).label('Ingredients'),
  });

  // Validation function
  const validateForm = () => {
    const newPizza = {
      name,
      image,
      price: Number(price),
      description,
      ingredients,
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

  const handleAddPizza = async () => {
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

    const updatedMenu = [...menu, newPizza];
    console.log('New pizza object created:', newPizza);
    console.log('Before adding, menu has', menu.length, 'items');

    // Update state
    setMenu(updatedMenu);
    
    // Save to API
    try {
      await saveMenu(updatedMenu);
      console.log('Menu successfully saved to API');
    } catch (error) {
      console.error('Failed to save menu to API:', error);
    }

    console.log('after adding, menu has', updatedMenu.length, 'items');
    console.log('Updated menu:', updatedMenu);
    
    // Reset form
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setIngredients('');
    setTouched({});
    console.log('Form reset complete');
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
        
        {loading ? (
          <p>Loading menu data...</p>
        ) : (
          <>
            <div className='form-column'>
              <label>Name:</label>
              <input
                className='input-field-add'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
              />
              <p className={`error-text ${touched.name && errors.name ? 'visible' : ''}`}>
                {errors.name}
              </p>
              
              <label>Price:</label>
              <input
                className='input-field-add'
                type='text'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, price: true }))}
              />
              <p className={`error-text ${touched.price && errors.price ? 'visible' : ''}`}>
                {errors.price}
              </p>
              
              <label>Ingredients:</label>
              <input
                className='input-field-add'
                type='text'
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, ingredients: true }))}
              />
              <p className={`error-text ${touched.ingredients && errors.ingredients ? 'visible' : ''}`}>
                {errors.ingredients}
              </p>
            </div>
            
            <div className='form-column'>
              <label>Picture:</label>
              <input
                className='input-field-add'
                type='text'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, image: true }))}
              />
              <p className={`error-text ${touched.image && errors.image ? 'visible' : ''}`}>
                {errors.image}
              </p>
              
              <label>Description:</label>
              <input
                className='input-field-add'
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, description: true }))}
              />
              {touched.description && errors.description && (
                <p className={`error-text ${touched.description && errors.description ? 'visible' : ''}`}>
                  {errors.description}
                </p>
              )}
              
              <div className='button-container'>
                <button
                  className='add-new-food-item'
                  onClick={handleAddPizza}
                  disabled={!isFormValid()}
                >
                  Add
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default AddPizzaForm;