import { create } from "zustand";

const useMenuStore = create((set) => ({
  hiddenItems: [],
  hideItem: (id) =>
    set((state) => ({
      hiddenItems: [...state.hiddenItems, id],
    })),
  showItem: (id) =>
    set((state) => ({
      hiddenItems: state.hiddenItems.filter((itemId) => itemId !== id),
    })),
}));

export { useMenuStore };
