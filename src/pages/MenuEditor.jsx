// src/pages/MenuEditor.jsx

import React, { useEffect } from 'react'
import { useMenuStore } from '../store/menuStore'
import MenuForm from '../components/MenuForm'

export default function MenuEditor() {
  const fetchMenus = useMenuStore(state => state.fetchMenus)

  useEffect(() => {
    fetchMenus()
  }, [fetchMenus])

  return (
    <div className="menu-box">
      <MenuForm />
    </div>
  )
}