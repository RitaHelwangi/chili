// src/store/menuStore.js

import { create } from 'zustand'
import { loadFromApi, saveMenu } from '../data/api'

const fallbackMenus = [
  {
    name: 'Classic Margherita',
    description: 'A timeless favorite with tomato base and mozzarella cheese.',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Fresh basil'],
    price: 95,
    image: 'https://www.oliviascuisine.com/wp-content/uploads/2016/08/classic-pizza-margherita-1.jpg'
  },
  {
    name: 'Spicy Pepperoni',
    description: 'A fiery twist on the classic with our homemade chili oil.',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni', 'Chili oil'],
    price: 110,
    image: 'https://flouredframe.com/wp-content/uploads/2022/07/sweet-spicy-pizza-2.jpg'
  },
  {
    name: 'Chili Inferno',
    description: 'Our spiciest pizza yet – not for the faint-hearted!',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Spicy salami', 'Jalapeños', 'Red chili flakes'],
    price: 120,
    image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Green Garden',
    description: 'A fresh and healthy vegetarian pizza full of greens.',
    ingredients: ['Pesto base', 'Mozzarella', 'Zucchini', 'Spinach', 'Olives'],
    price: 105,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop'
  },
  {
    name: 'Cheesy Explosion',
    description: 'A four-cheese blend for all cheese lovers.',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Parmesan', 'Blue cheese', 'Cheddar'],
    price: 115,
    image: 'https://plus.unsplash.com/premium_photo-1690056321981-dfe9e75e0247?q=80&w=1974&auto=format&fit=crop'
  }
]

export const useMenuStore = create((set, get) => ({
  menus: [],
  fetchMenus: async () => {
    const data = await loadFromApi()
    if (data) {
      const updatedMenus = data.map(menu => {
        const fallback = fallbackMenus.find(f => f.name === menu.name)
        if (!fallback) return menu
        return {
          ...menu,
          description: menu.description || fallback.description,
          ingredients: menu.ingredients?.length ? menu.ingredients : fallback.ingredients,
          price: menu.price || fallback.price,
          image: menu.image || fallback.image
        }
      })
      set({ menus: updatedMenus })
    }
  },
  addMenu: (menu) => set((state) => ({ menus: [...state.menus, menu] })),
  editMenu: (menu) => set((state) => ({
    menus: state.menus.map(m => m.id === menu.id ? menu : m)
  })),
  removeMenu: (id) => set((state) => ({
    menus: state.menus.filter(m => m.id !== id)
  })),
  saveMenus: async () => {
    await saveMenu(get().menus)
  }
}))

