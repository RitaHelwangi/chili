// src\components\MenuForm.jsx 
import React, { useState, useEffect } from 'react'
import Joi from 'joi'
import { useMenuStore } from '../store/menuStore'

export default function MenuForm() {
  const { menus, addMenu, editMenu, removeMenu, fetchMenus, saveMenus } = useMenuStore()
  const [form, setForm] = useState({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' })
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState('')
  const [validationError, setValidationError] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchMenus()
  }, [fetchMenus])

  const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(1).required(),
    description: Joi.string().required(),
    ingredients: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().uri().allow('').optional(),
    alt: Joi.string().required(),
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    const { error } = schema.validate(form)
    if (error) {
      setValidationError(error.details[0].message)
      return
    }
    setValidationError('')

    const formattedIngredients = form.ingredients.split(',').map(i => i.trim())
    const menuData = { ...form, ingredients: formattedIngredients }

    if (editingId) {
      editMenu(menuData)
      setMessage('Menu updated!')
    } else {
      const newId = crypto.randomUUID()
      addMenu({ ...menuData, id: newId })
      setMessage('Menu added!')
    }

    await saveMenus()
    setTimeout(() => setMessage(''), 3000)
    setForm({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' })
    setEditingId(null)
  }

  const filteredMenus = menus.filter(menu => {
    const matchSearch = (value) => value.toLowerCase().includes(search.toLowerCase())
    return matchSearch(menu.name) || matchSearch(menu.description) || menu.ingredients?.some(i => matchSearch(i))
  })

  return (
    <div className="form-area">
      <h2>Edit Menu</h2>
      <input name="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search menu..." autoComplete="off" />

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" autoComplete="name" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" autoComplete="off" />
      <input name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients (comma-separated)" autoComplete="off" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" autoComplete="off" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" autoComplete="url" />
      <input name="alt" value={form.alt} onChange={handleChange} placeholder="Alt text" autoComplete="off" />

      <button onClick={handleSubmit}>{editingId ? 'Update' : 'Save'}</button>
      {editingId && <button onClick={() => { setEditingId(null); setForm({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' }) }}>Cancel</button>}
      {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
      {message && <div className="success-message">{message}</div>}

      <h3>Menu List</h3>
      {filteredMenus.map(menu => (
        <div key={menu.id} className="menu-item">
          <strong>{menu.name}</strong> - {menu.description}<br />
          <em>{Array.isArray(menu.ingredients) ? menu.ingredients.join(', ') : menu.ingredients}</em><br />
          <span>{menu.price} kr</span><br />
          {menu.image && <img src={menu.image} alt={menu.alt} width="100" />}<br />
          <button onClick={() => { setForm(menu); setEditingId(menu.id) }}>Edit</button>
          <button onClick={() => removeMenu(menu.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
