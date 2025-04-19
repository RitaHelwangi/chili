// src/components/MenuForm.jsx

import React, { useState } from 'react'
import Joi from 'joi'
import { useMenuStore } from '../store/menuStore'

const suggestions = ['Pizza', 'Pasta', 'Pie', 'Pepsi']

export default function MenuForm({ type }) {
  const { menus, addMenu, removeMenu, editMenu, saveMenus } = useMenuStore()
  const [form, setForm] = useState({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' })
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState('')

  const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(1).required(),
    description: Joi.string().required(),
    ingredients: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().allow('').optional(),
    alt: Joi.string().required()
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setForm(prev => ({ ...prev, image: reader.result }))
    }
    if (file) reader.readAsDataURL(file)
  }

  const handleSubmit = async () => {
    const { error } = schema.validate(form)
    if (error) {
      alert("Validation Error: " + error.details[0].message)
      return
    }
    if (editingId) {
      editMenu(form)
      setMessage('Menu updated and synced successfully!')
    } else {
      addMenu(form)
      setMessage('Menu added and synced successfully!')
    }
    await saveMenus()
    setTimeout(() => setMessage(''), 3000)
    setForm({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' })
    setEditingId(null)
  }

  return (
    <div className="form-area">
      <h2>{editingId ? 'Edit menu' : 'Add menu'}</h2>
      <input name="id" value={form.id} onChange={handleChange} placeholder="ID" autoComplete="off" />
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" list="suggestions" autoComplete="off" />
      <datalist id="suggestions">
        {suggestions.map((s, i) => <option key={i} value={s} />)}
      </datalist>
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" autoComplete="off" />
      <input name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients" autoComplete="off" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" autoComplete="off" />
      <input type="file" onChange={handleImageUpload} />
      <input name="alt" value={form.alt} onChange={handleChange} placeholder="Alt Text" autoComplete="off" />
      <button onClick={handleSubmit}>{editingId ? 'Update' : 'Save'}</button>
      {message && <div className="success-message">{message}</div>}

      <h3>Menu List</h3>
      {menus.map(menu => (
        <div key={menu.id} className="menu-item">
          <strong>{menu.name}</strong> — {menu.description}<br />
          <em>{Array.isArray(menu.ingredients) ? menu.ingredients.join(', ') : menu.ingredients}</em><br />
          <span>฿{menu.price}</span><br />
          {menu.image && <img src={menu.image} alt={menu.alt} width="100" style={{ marginTop: '8px' }} />}<br />
          <button onClick={() => { setForm(menu); setEditingId(menu.id) }}>Edit</button>
          <button onClick={() => removeMenu(menu.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}


