// src/store/menuStore.js

import { create } from "zustand";
import { loadFromApi, saveMenu } from "../data/api";

export const food = [
  {
    id: "1",
    name: "Classic Margherita",
    description: "A timeless favorite with tomato base and mozzarella cheese.",
    ingredients: ["Tomato sauce", "Mozzarella", "Fresh basil"],
    price: 95,
    image:
      "https://www.oliviascuisine.com/wp-content/uploads/2016/08/classic-pizza-margherita-1.jpg",
    alt: "Classic Margherita pizza with tomato and basil",
    category: "food",
  },
  {
    id: "2",
    name: "Spicy Pepperoni",
    description: "A fiery twist on the classic with our homemade chili oil.",
    ingredients: ["Tomato sauce", "Mozzarella", "Pepperoni", "Chili oil"],
    price: 110,
    image:
      "https://flouredframe.com/wp-content/uploads/2022/07/sweet-spicy-pizza-2.jpg",
    alt: "Spicy Pepperoni pizza with chili oil",
    category: "food",
  },
  {
    id: "3",
    name: "Chili Inferno",
    description: "Our spiciest pizza yet – not for the faint-hearted!",
    ingredients: [
      "Tomato sauce",
      "Mozzarella",
      "Spicy salami",
      "Jalapeños",
      "Red chili flakes",
    ],
    price: 120,
    image:
      "https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Very spicy pizza with jalapeños and chili flakes",
    category: "food",
  },
  {
    id: "4",
    name: "Green Garden",
    description: "A fresh and healthy vegetarian pizza full of greens.",
    ingredients: ["Pesto base", "Mozzarella", "Zucchini", "Spinach", "Olives"],
    price: 105,
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Vegetarian pizza with green vegetables and pesto",
    category: "food",
  },
  {
    id: "5",
    name: "Cheesy Explosion",
    description: "A four-cheese blend for all cheese lovers.",
    ingredients: [
      "Tomato sauce",
      "Mozzarella",
      "Parmesan",
      "Blue cheese",
      "Cheddar",
    ],
    price: 115,
    image:
      "https://plus.unsplash.com/premium_photo-1690056321981-dfe9e75e0247?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pizza with a mix of four cheeses",
    category: "food",
  },
  {
    id: "6",
    name: "BBQ Chicken",
    description: "Sweet and smoky BBQ sauce with grilled chicken pieces.",
    ingredients: [
      "BBQ sauce",
      "Mozzarella",
      "Chicken",
      "Red onion",
      "Cilantro",
    ],
    price: 119,
    image:
      "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "BBQ chicken pizza with onion and cilantro",
    category: "food",
  },
  {
    id: "7",
    name: "Truffle Delight",
    description: "Luxury meets flavor with creamy truffle sauce and mushrooms.",
    ingredients: [
      "Truffle cream",
      "Mozzarella",
      "Mushrooms",
      "Parmesan",
      "Arugula",
    ],
    price: 130,
    image:
      "https://images.unsplash.com/photo-1640867870584-53ceb4132dc6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pizza with truffle cream and mushrooms",
    category: "food",
  },
  {
    id: "8",
    name: "Tuna Surprise",
    description: "A seafood twist with tuna and red onion.",
    ingredients: ["Tomato sauce", "Mozzarella", "Tuna", "Red onion", "Capers"],
    price: 112,
    image:
      "https://plus.unsplash.com/premium_photo-1730829452112-9255b16c2df8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pizza with tuna, onion, and capers",
    category: "food",
  },
  {
    id: "9",
    name: "Meat Lover’s Dream",
    description: "Packed with meat for the ultimate carnivore.",
    ingredients: [
      "Tomato sauce",
      "Mozzarella",
      "Sausage",
      "Bacon",
      "Ham",
      "Salami",
    ],
    price: 125,
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pizza loaded with various types of meat",
    category: "food",
  },
  {
    id: "10",
    name: "Veggie Volcano",
    description: "A spicy vegetarian pizza bursting with flavor.",
    ingredients: [
      "Tomato sauce",
      "Mozzarella",
      "Bell pepper",
      "Chili flakes",
      "Onion",
      "Corn",
    ],
    price: 108,
    image:
      "https://images.unsplash.com/photo-1646257106221-18a7dbc7774d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Spicy vegetarian pizza with colorful toppings",
    category: "food",
  },
];

export const useMenuStore = create((set, get) => ({
  menus: [],

  // Fetch menus from the API and merge with fallback data
  fetchMenus: async () => {
    try {
      const data = await loadFromApi();
      console.log("Fetched API data:", data);

      // Ensure `data` is an array
      const apiData = Array.isArray(data) ? data : [data];

      // Merge API data with fallback data
      const mergedMenus = food.map((fallbackItem) => {
        const apiItem = apiData.find((item) => item.name === fallbackItem.name);
        return apiItem || fallbackItem; // Use API item if it exists, otherwise fallback
      });

      // Add any items from the API that are not in the fallback data
      const additionalMenus = apiData.filter(
        (apiItem) =>
          !food.some((fallbackItem) => fallbackItem.name === apiItem.name)
      );

      const finalMenus = [...mergedMenus, ...additionalMenus];
      console.log("Final merged menus:", finalMenus);

      set({ menus: finalMenus }); // Update the state with the final merged menus
    } catch (err) {
      console.error("Error fetching menus:", err);
    }
  },

  // Add a new menu item
  addMenu: (menu) =>
    set((state) => ({
      menus: [...state.menus, menu],
    })),

  // Edit an existing menu item
  editMenu: (menu) =>
    set((state) => ({
      menus: state.menus.map(
        (m) => (m.id === menu.id ? { ...m, ...menu } : m) // Merge the updated fields with the existing item
      ),
    })),

  // Remove a menu item by ID
  removeMenu: (id) =>
    set((state) => ({
      menus: state.menus.filter((m) => m.id !== id),
    })),

  // Save the current menus to the API
  saveMenus: async () => {
    try {
      const menus = get().menus;
      await saveMenu(menus);
      console.log("Menus saved successfully:", menus);
    } catch (err) {
      console.error("Error saving menus:", err);
    }
  },
}));
