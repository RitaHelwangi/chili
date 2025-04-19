// src/store/menuStore.js

import { create } from 'zustand'

const api = 'https://forverkliga.se/JavaScript/api/jsonStore.php'
const key = 'chilis-unique-key'

export const useMenuStore = create((set, get) => ({
  menus: [],
  fetchMenus: async () => {
    try {
      const res = await fetch(`${api}?method=load&key=${key}`)
      const result = await res.json()

      let parsed = []

      if (Array.isArray(result)) {
        parsed = result
      } else if (Array.isArray(result.value)) {
        parsed = result.value
      } else if (typeof result.value === 'string') {
        parsed = JSON.parse(result.value)
      } else {
        console.error("❌ Unrecognized API format:", result)
        return
      }

      set({ menus: parsed })
    } catch (err) {
      console.error("❌ Failed to fetch menus:", err)
    }
  },
  addMenu: (menu) => set(state => ({ menus: [...state.menus, menu] })),
  removeMenu: (id) => set(state => ({ menus: state.menus.filter(m => m.id !== id) })),
  editMenu: (menu) => set(state => ({ menus: state.menus.map(m => m.id === menu.id ? menu : m) })),
  saveMenus: async () => {
    try {
      await fetch(`${api}?method=save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value: JSON.stringify(get().menus) })
      })
    } catch (err) {
      console.error("❌ Failed to save menus:", err)
    }
  }
}))
