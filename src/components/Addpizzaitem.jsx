import React, { useState } from 'react';
import { pizzaMenu } from '../data/menuStore.js';
import './addpizzaitem.css'

const AddPizzaForm = () => {
  // Form state
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  // Touched state for validation
  const [touched, setTouched] = useState({
    name: false,
    image: false,
    price: false,
    description: false,
    ingredients: false,
  });

  // Menu state
  const [menu, setMenu] = useState(pizzaMenu);

   // Function to handle adding a new pizza item
  const handleAddPizza = () => {
    if (!name || !image || !price || !description || !ingredients) {
      alert('Please fill out all fields before adding a pizza.');
      return;
    }
     // Create a new pizza object
    const newPizza = {
      id: crypto.randomUUID,
      name: name,
      description: description,
      ingredients: ingredients.split(',').map(item => item.trim()),
      price: Number(price),
      image: image,
      alt: `${name} pizza`,
    };

    const updatedMenu = [...menu, newPizza];
    setMenu(updatedMenu);

    // Reset form
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setIngredients('');
    setTouched({
      name: false,
      image: false,
      price: false,
      description: false,
      ingredients: false,
    });
  };

  // Function to handle field blur for validation
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const isFieldInvalid = (fieldValue, fieldTouched) => !fieldValue && fieldTouched;

  return (
    <div>
      <section className="add-food-input">
        <h2>Lägg till ny rätt</h2>

        <label className='text-add-input'>Namn:</label>
        <input className='input-field-add'
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onBlur={() => handleBlur('name')}
        />
        {isFieldInvalid(name, touched.name) && <p className="error">Namn är obligatoriskt.</p>}

        <label className='picture-add-input'>Bildlänk:</label>
        <input className='input-field-add'
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          onBlur={() => handleBlur('image')}
        />
        {isFieldInvalid(image, touched.image) && <p className="error">Bildlänk är obligatoriskt.</p>}

        <label className='price-add-input'>Pris:</label>
        <input 
          className='input-field-add'
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          onBlur={() => handleBlur('price')}
        />
        {isFieldInvalid(price, touched.price) && <p className="error">Pris är obligatoriskt.</p>}

        <label className='description-add-input'>Description:</label>
        <input 
          className='input-field-add'
          value={description}
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          onBlur={() => handleBlur('description')}
        />
        {isFieldInvalid(description, touched.description) && <p className="error">Beskrivning är obligatoriskt.</p>}

        <label className='ingredients-add-input'>Ingredients :</label>
        <input
          className='input-field-add'
          type="text"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          onBlur={() => handleBlur('ingredients')}
        />
        {isFieldInvalid(ingredients, touched.ingredients) && <p className="error">Ingredienser är obligatoriskt.</p>}

        <button className="add-new-food-item" onClick={handleAddPizza}>
          Lägg till
        </button>
      </section>

      <p>Current menu items: {menu.length}</p>
    </div>
  );
};

export default AddPizzaForm;