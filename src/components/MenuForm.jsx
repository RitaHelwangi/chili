// src/components/MenuForm.jsx

import React, { useState, useEffect } from 'react'
import Joi from 'joi'
import { useMenuStore } from '../store/menuStore'

const suggestions = ['Pizza', 'Pasta', 'Pie', 'Pepsi']

export default function MenuForm() {
  const { menus, addMenu, removeMenu, editMenu, saveMenus, fetchMenus } = useMenuStore()
  const [form, setForm] = useState({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' })
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState('')
  const [filter, setFilter] = useState('all')
  const [validationError, setValidationError] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchMenus()
  }, [])

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

  const handleSubmit = async () => {
    const { error } = schema.validate(form)
    if (error) {
      setValidationError(error.details[0].message)
      return
    }
    setValidationError('')

    const updatedForm = {
      ...form,
      image: form.image?.startsWith('http') ? form.image : form.image.replace(/^.*[\\/]/, '') // get filename only
    }

    if (editingId) {
      editMenu(updatedForm)
      setMessage('Menu updated and synced successfully!')
    } else {
      addMenu(updatedForm)
      setMessage('Menu added and synced successfully!')
    }
    await saveMenus()
    setTimeout(() => setMessage(''), 3000)
    setForm({ id: '', name: '', description: '', ingredients: '', price: '', image: '', alt: '' })
    setEditingId(null)
  }

  const filteredMenus = menus.filter(menu => {
    const matchFilter = filter === 'all' || (filter === 'food' && menu.type !== 'drink') || (filter === 'drink' && menu.type === 'drink')
    const matchSearch = Object.values(menu).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
    )
    return matchFilter && matchSearch
  })

  const resolveImagePath = (imagePath) => {
    if (!imagePath) return ''
    return imagePath.startsWith('http') ? imagePath : `/images/${imagePath}`
  }

  return (
    <div className="form-area">
      <div className="menu-buttons">
        <button className="menu-button" onClick={() => setFilter('food')}>Food</button>
        <button className="menu-button" onClick={() => setFilter('drink')}>Drinks</button>
      </div>

      <h2>Edit menu</h2>

      <input name="search" id="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <input name="id" id="id" value={form.id} onChange={handleChange} placeholder="ID" autoComplete="off" />
      <input name="name" id="name" value={form.name} onChange={handleChange} placeholder="Name" list="suggestions" autoComplete="off" />
      <datalist id="suggestions">
        {suggestions.map((s, i) => <option key={i} value={s} />)}
      </datalist>
      <input name="description" id="description" value={form.description} onChange={handleChange} placeholder="Description" autoComplete="off" />
      <input name="ingredients" id="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients" autoComplete="off" />
      <input name="price" id="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" autoComplete="off" />
      <input name="alt" id="alt" value={form.alt} onChange={handleChange} placeholder="Alt Text" autoComplete="off" />
      <input name="image" id="image" value={form.image} onChange={handleChange} placeholder="Image filename (e.g. bruschetta.jpg)" autoComplete="off" />

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
      {filteredMenus.length === 0 && <p>No menu items found.</p>}
      {filteredMenus.map(menu => (
        <div key={menu.id} className="menu-item">
          <strong>{menu.name}</strong> — {menu.description}<br />
          <em>{Array.isArray(menu.ingredients) ? menu.ingredients.join(', ') : menu.ingredients}</em><br />
          <span>฿{menu.price}</span><br />
          {menu.image && <img src={resolveImagePath(menu.image)} alt={menu.alt} width="100" style={{ marginTop: '8px' }} />}<br />
          <button className="menu-button" onClick={() => { setForm(menu); setEditingId(menu.id) }}>Edit</button>
          <button className="menu-button" onClick={() => removeMenu(menu.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}
