// import {create} from 'zustand';

// const useMenuStore = create((set) => ({
// 	hiddenItems: [],
// 	hideItem: (id) => 
// 		set((state) => ({
// 			hiddenItems: [...state.hiddenItems, id],
// 		})),
// 		showItem: (id) => 
// 			set((state) => ({
// 				hiddenItems: state.hiddenItems.filter(itemId => itemId !== id),
// 			})),
// }));

// export {useMenuStore};

import { create } from 'zustand';

// Läser från LocalStorage först
const savedHiddenItems = JSON.parse(localStorage.getItem('hiddenItems')) || [];

const useMenuStore = create((set) => ({
  hiddenItems: savedHiddenItems,
  hideItem: (id) =>
    set((state) => {
      const updated = [...state.hiddenItems, id];
      localStorage.setItem('hiddenItems', JSON.stringify(updated)); // Sparar i LocalStorage
      return { hiddenItems: updated };
    }),
  showItem: (id) =>
    set((state) => {
      const updated = state.hiddenItems.filter(itemId => itemId !== id);
      localStorage.setItem('hiddenItems', JSON.stringify(updated)); // Uppdaterar i LocalStorage
      return { hiddenItems: updated };
    }),
}));

export { useMenuStore };