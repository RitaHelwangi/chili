// src/store/menuStore.js

import { create } from 'zustand'

const api = 'https://forverkliga.se/JavaScript/api/jsonStore.php'
const key = 'chilis-unique-key'

//Create & export 'useMenuStore' to access state.
export const useMenuStore = create((set, get) => ({
  // Cretae 'menus' to store the list of all menu items.
  menus: [],
  // 'fetchMenus' fetches menu data from the API
  fetchMenus: async () => {
    try {
      const res = await fetch(`${api}?method=load&key=${key}`)
      const text = await res.text()

      try {
        const json = JSON.parse(text)
        const parsed = typeof json === 'string' ? JSON.parse(json) : json
        set({ menus: Array.isArray(parsed) ? parsed : [] })
      } catch {
        console.error('Unrecognized API format:', text)
      }
    } catch (err) {
      console.error('Fetch error:', err)
    }
  },
  // Added menus : add, remove, edit, save.
  addMenu: (menu) => set(state => ({ menus: [...state.menus, menu] })),
  removeMenu: (id) => set(state => ({ menus: state.menus.filter(m => m.id !== id) })),
  editMenu: (menu) => set(state => ({ menus: state.menus.map(m => m.id === menu.id ? menu : m) })),
  saveMenus: async () => {
    try {
      await fetch(`${api}?method=save`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key,
          value: JSON.stringify(get().menus)
        })
      })
    } catch (err) {
      console.error('Save error:', err)
    }
  }
}))

