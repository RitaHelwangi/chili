// src/store/menuStore.js

import { create } from 'zustand'
import { loadFromApi, saveMenu } from '../data/api' // ใช้ API จาก GitHub

export const useMenuStore = create((set, get) => ({
  menus: [],
  fetchMenus: async () => {
    const data = await loadFromApi()
    if (data) set({ menus: data })
  },
  addMenu: (menu) => set((state) => ({ menus: [...state.menus, menu] })),
  editMenu: (menu) => set((state) => ({ menus: state.menus.map(m => m.id === menu.id ? menu : m) })),
  removeMenu: (id) => set((state) => ({ menus: state.menus.filter(m => m.id !== id) })),
  saveMenus: async () => {
    await saveMenu(get().menus)
  }
}))

