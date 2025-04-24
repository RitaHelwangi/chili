// src/pages/MenuEditor.jsx

import React, { useEffect } from 'react'
import MenuForm from '../components/MenuForm'

export default function MenuEditor() {
  return (
    <div className="menu-box">
      <MenuForm />
    </div>
  )
}

// Create & export function 'MenuEditor' used as the page for editing menus.
// Get the 'fetchMenus' function from the Zustand store to load menu data from the API.
// Use 'useEffect' to call 'fetchMenus' 
// Render the MenuForm.