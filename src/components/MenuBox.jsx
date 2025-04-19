// src/components/MenuBox.jsx
import React, { useState } from 'react'
import MenuForm from './MenuForm'

export default function MenuBox() {
  const [type, setType] = useState('food')

  return (
    <div className="menu-box">
      <div className="menu-buttons">
        <button onClick={() => setType('food')}>Food</button>
        <button onClick={() => setType('drinks')}>Drinks</button>
      </div>
      <div className="menu-content">
        <h2>Add Menu</h2>
        <MenuForm type={type} />
      </div>
    </div>
  )
}