// src/pages/MenuEditor.jsx

import React, { useEffect } from 'react'
import MenuForm from '../components/MenuForm'
import { useMenuStore } from '../store/menuStore'

export default function MenuEditor() {
  const { fetchMenus } = useMenuStore()

  useEffect(() => {
    fetchMenus()
  }, [])

  return <MenuForm />
}
