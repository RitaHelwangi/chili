// src/components/MenuForm.jsx

import React, { useState, useEffect } from 'react'
import Joi from 'joi'
import { useMenuStore } from '../store/menuStore'

const suggestions = ['Pizza', 'Pasta', 'Pie', 'Pepsi']

// Create a component 'MenuForm'which used to add, edit, and manage menu items.
// Destructure state & actions from useMenuStore.
// Set up form input state with default empty values.
// Define states for edit mode, message, category filter, validation error, and search text.
export default function MenuForm() {
  const { menus, addMenu, removeMenu, editMenu, saveMenus, fetchMenus } = useMenuStore()
  const [form, setForm] = useState({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' })
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState('')
  const [filter, setFilter] = useState('all')
  const [validationError, setValidationError] = useState('')
  const [search, setSearch] = useState('')

  // fetch menus from the store.
  useEffect(() => {
    fetchMenus()
  }, [fetchMenus])
  
  // Define Joi validation schema for validating the menu form.
  const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(1).required(),
    description: Joi.string().required(),
    ingredients: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().allow('').optional(),
    alt: Joi.string().required()
  })

  // Update the form state when the user types.
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // When click 'save' or 'update'/ show error if something is error.
  const handleSubmit = async () => {
    const { error } = schema.validate(form)
    if (error) {
      setValidationError(error.details[0].message)
      return
    }
    // Clear any previous validation error.
    setValidationError('')

    // If in editing mode, update the menu. Otherwise, add new menu.
    if (editingId) {
      editMenu(form)
      setMessage('Menu updated and synced successfully!')
    } else {
      addMenu(form)
      setMessage('Menu added and synced successfully!')
    }
    // Save to backend, clear form & message after 3 seconds.
    await saveMenus()
    setTimeout(() => setMessage(''), 3000)
    setForm({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' })
    setEditingId(null)
  }

  // Filter menu items based on search term & type.
  const filteredMenus = menus.filter(menu => {
    const matchSearch = (value) => value.toLowerCase().includes(search.toLowerCase())
    const isSearchMatch = matchSearch(menu.name) || matchSearch(menu.description) || menu.ingredients?.some(i => matchSearch(i))
    const isTypeMatch = filter === 'all' || (filter === 'food' && menu.type === 'food') || (filter === 'drink' && menu.type === 'drink')
    return isSearchMatch && isTypeMatch
  })

  return (
    <div className="form-area">
      <div className="filter-buttons">
        <button className="menu-button" onClick={() => setFilter('food')}>Food</button>
        <button className="menu-button" onClick={() => setFilter('drink')}>Drinks</button>
      </div>

      <h2>Edit Menu</h2>

      <input id="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search menu..." autoComplete="off" />

      <input name="id" id="id" value={form.id} onChange={handleChange} placeholder="ID" autoComplete="off" />
      <input name="name" id="name" value={form.name} onChange={handleChange} placeholder="Name" list="suggestions" autoComplete="off" />
      <datalist id="suggestions">
        {suggestions.map((s, i) => <option key={i} value={s} />)}
      </datalist>
      <input name="description" id="description" value={form.description} onChange={handleChange} placeholder="Description" autoComplete="off" />
      <input name="ingredients" id="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients" autoComplete="off" />
      <input name="price" id="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" autoComplete="off" />
      <input name="alt" id="alt" value={form.alt} onChange={handleChange} placeholder="Alt Text" autoComplete="off" />

      <div className="action-buttons">
        <button className="menu-button" onClick={handleSubmit}>{editingId ? 'Update' : 'Save'}</button>
        {editingId && (
          <button className="menu-button" onClick={() => {
            setForm({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' });
            setEditingId(null)
          }}>Cancel</button>
        )}
        {validationError && <div style={{ color: 'red', marginTop: '4px' }}>{validationError}</div>}
      </div>

      {message && <div className="success-message">{message}</div>}

      <h3>Menu List</h3>
      {filteredMenus.length === 0 && <p className="menu-item empty">No menu items found.</p>}
      {filteredMenus.map(menu => (
        <div key={menu.id} className="menu-item">
          <strong>{menu.name}</strong> — {menu.description}<br />
          <em>{Array.isArray(menu.ingredients) ? menu.ingredients.join(', ') : menu.ingredients}</em><br />
          <span>฿{menu.price}</span><br />
          {menu.image && <img src={"/images/" + menu.image} alt={menu.alt} width="100" style={{ marginTop: '8px' }} />}<br />
          <button className="menu-button" onClick={() => { setForm(menu); setEditingId(menu.id) }}>Edit</button>
          <button className="menu-button" onClick={() => removeMenu(menu.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

// Can edit: ID, Name, Description, Ingredients, Price, Alt text (for image).
// Uses Joi to validate input (e.g., price must be a number, name is required).
// Save / Edit Mode : If the user is editing an item, it updates the existing one. / If the user is adding a new one, it creates a new menu item.
// Filter menu items by typing keywords.
// Toggle between "Food" and "Drinks" menus.
// Shows success messages / errors.
// Below the form, it displays a list of current menus with Edit / Remove buttons.

