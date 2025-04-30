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
];

export const useMenuStore = create((set, get) => ({
  menus: [],

  // Fetch menus from the API and merge with fallback data
  fetchMenus: async () => {
    try {
      const apiData = await loadFromApi();

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
      set({ menus: food }); // fallback om API misslyckas
    }
  },

  addMenu: (menu) =>
    set((state) => ({
      menus: [...state.menus, menu],
    })),

  editMenu: (menu) =>
    set((state) => ({
      menus: state.menus.map(
        (m) => (m.id === menu.id ? { ...m, ...menu } : m) // Merge the updated fields with the existing item
      ),
    })),

  removeMenu: (id) =>
    set((state) => ({
      menus: state.menus.filter((m) => m.id !== id),
    })),

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
