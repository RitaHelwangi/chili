import { create } from "zustand";
import { food } from "../data/menuStore";

export const useOrderStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      console.log("Item being added:", item); // Debugging: Log the item
      const exists = state.cart.find((cartItem) => cartItem.id === item.id);
      if (exists) {
        const updatedCart = state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { cart: updatedCart };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  // removeFromCart: true,
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),

  updateQuantity: (itemId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),

  getAllMenuItems: () => [...food],
}));
