// src/components/MenuForm.jsx
// menu editor page

import React, { useState, useEffect } from 'react';
import Joi from 'joi';
import { useMenuStore } from '../store/menuStore';
import './MenuForm.css'; 

// Create 'MenuForm' for editing the menu list.
// Create 'useMenuStore' to store all menus, edit, remove, fetch, and save to API.
export default function MenuForm() {
  const { menus, addMenu, editMenu, removeMenu, fetchMenus, saveMenus } = useMenuStore();
  const [form, setForm] = useState({ id: '', name: '', description: '', ingredients: '', price: '', image: '' });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  // Create 'fetchMenus' for loading all menu items from API.
  useEffect(() => {
    fetchMenus();
  }, [fetchMenus]);

  // Joi 'schema' defines validation rules for the form.
  // allow('') means Joi lets an empty string "" pass.
  // required() means the field must be there, but it can be empty.
  const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(1).required(),
    description: Joi.string().allow('').required(), 
    ingredients: Joi.string().allow('').required(),  
    price: Joi.number().required(),
    image: Joi.string().uri().allow('').optional()
  });

  // Create 'handleChange' for updating form when the user input info.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  // 'handleSubmit' when clicking Save or Update (validates the form data, edit & save all data to API)
  const handleSubmit = async () => {
    const { id, name, description, ingredients, price, image } = form;
    const formattedIngredients = ingredients.split(',').map(i => i.trim());
    const menuData = { id, name, description, ingredients: formattedIngredients, price, image };

    const { error } = schema.validate({ id, name, description, ingredients, price, image });
    if (error) {
      setValidationError(error.details[0].message);
      return;
    }
    setValidationError('');

    if (editingId) {
      console.log("Updating menu:", menuData);  // Check if menu updated.
      editMenu(menuData);
      setMessage('Menu updated!');
    } else {
      const newId = crypto.randomUUID();
      const newMenu = { ...menuData, id: newId };
      console.log("Adding new menu:", newMenu);  // Check if menu added.
      addMenu({ ...menuData, id: newId });
      setMessage('Menu added!');
    }

    await saveMenus();
    console.log("Current menus after save:", menus); // Check if menu saved.
    setTimeout(() => setMessage(''), 3000);
    setForm({ id: '', name: '', description: '', ingredients: '', price: '', image: '' });
    setEditingId(null);
  };

  // Create 'handleRemove' for deleting the menu from the store & updating data to the API.
  // Create 'message & validationError' to display "success" or "error" notifications on the webpage.
  const handleRemove = async (id) => {
    // console.log for testing if 'Remove' works.
    console.log("Deleting ID:", id);
    removeMenu(id);
    await saveMenus();
    // Check if the menu item was actually deleted.
    console.log("Current menu after deletion:", menus);
  };

  return (
    <div className="menuform-area">
      <h2>Edit Menu</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" autoComplete="name" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" autoComplete="off" />
      <input name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients (comma-separated)" autoComplete="off" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" autoComplete="off" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" autoComplete="off" />

      <button className="menuform-button" onClick={handleSubmit}>
        {editingId ? 'Update' : 'Save'}
      </button>
      {editingId && (
        <button className="menuform-button" onClick={() => {
          setEditingId(null);
          setForm({ id: '', name: '', description: '', ingredients: '', price: '', image: '' });
        }}>
          Cancel
        </button>
      )}
      {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
      {message && <div className="menuform-success-message">{message}</div>}

      <h3>Menu List</h3>
      {menus.map(menu => (
        <div key={menu.id} className="menuform-item">
          <strong>{menu.name}</strong> - {menu.description}<br />
          <em>{Array.isArray(menu.ingredients) ? menu.ingredients.join(', ') : menu.ingredients}</em><br />
          <span>{menu.price} kr</span><br />
          {menu.image && <img src={menu.image} alt={menu.name} width="100" />}<br />
          <button
            className="menuform-button"
            onClick={() => {
              console.log("Editing menu:", menu); // << Check if "Edit" button is working
              // When loading menu data into the form, make sure that if a value is missing, set it to '' (an empty string).
              setForm({
                id: menu.id || '',
                name: menu.name || '',
                description: menu.description || '', 
                ingredients: Array.isArray(menu.ingredients) ? menu.ingredients.join(', ') : (menu.ingredients || ''),
                price: menu.price || '',
                image: menu.image || ''
              });
              setEditingId(menu.id);
            }}
          >
            Edit
          </button>
          <button className="menuform-button" onClick={() => handleRemove(menu.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

