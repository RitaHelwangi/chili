import { create } from "zustand";
import { loadFromApi } from "../data/api";
import food from "../data/menu"

export const useMenuStore = create((set, get) => ({
  menus: [],
  fetchMenus: async () => {
    try {
      const apiData = await loadFromApi();

      // Mixa API-data med fallback där namn matchar
      const mergedData = apiData.map((apiItem) => {
        const fallbackItem = food.find((f) => f.name === apiItem.name);
        return {
          ...fallbackItem, // börja med fallback (så vi får ingredients, alt, etc.)
          ...apiItem,      // men överskriv med data från API där det finns
        };
      });

      console.log("Merged menu data:", mergedData);
      set({ menus: mergedData });
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
      menus: state.menus.map((m) => (m.id === menu.id ? menu : m)),
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
