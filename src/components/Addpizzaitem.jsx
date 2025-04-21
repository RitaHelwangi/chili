import React, { useState } from 'react';
import { pizzaMenu } from '../data/menuStore.js';

const AddPizzaForm = () => {
  // Form state
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  
  // Menu state 
  const [menu, setMenu] = useState(pizzaMenu);
  
  const handleAddPizza = () => {
    // here we create a new object with the input
    const newPizza = {
      id: Date.now().toString(), // We need to choose a id to use 
      name: name,
      description: description,
      ingredients: ingredients.split(',').map(item => item.trim()),
      price: Number(price),
      image: image,
      alt: `${name} pizza`
    };

    console.log('New pizza object created:', newPizza);
    console.log('Before adding, menu has', menu.length, 'items');
    
    // Create new menu array with the added pizza
    const updatedMenu = [...menu, newPizza];
    setMenu(updatedMenu);
    
    console.log('After adding, menu now has', updatedMenu.length, 'items');
    console.log('Updated menu:', updatedMenu);

    // Reset form
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setIngredients('');
    console.log('Form reset complete');
  };

  return (
    <div>
      <section className="add-food-input">
        <h2>Lägg till ny rätt</h2>
        
        <label>Namn:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)}
        />
        
        <label>Bildlänk:</label>
        <input 
          type="text" 
          value={image} 
          onChange={(event) => setImage(event.target.value)}
        />
        
        <label>Pris:</label>
        <input 
          type="text" 
          value={price} 
          onChange={(event) => setPrice(event.target.value)} 
        />
        
        <label>Beskrivning:</label>
        <input 
          className="add-description" 
          value={description} 
          type="text" 
          onChange={(event) => setDescription(event.target.value)} 
        />
        
        <label>Ingredienser :</label>
        <input 
          type="text" 
          value={ingredients} 
          onChange={(event) => setIngredients(event.target.value)} 
        />
        
        <button className='add-new-food-item' onClick={handleAddPizza}>
          Lägg till
        </button>
      </section>
      
      {}
      <p>Current menu items: {menu.length}</p>
    </div>
  );
};

export default AddPizzaForm;