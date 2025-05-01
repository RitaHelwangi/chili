import { create } from "zustand";

export const useOrderStore = create((set) => ({
  cart: [],

  addToCart: (pizza) =>
    set((state) => {
      const exists = state.cart.find((item) => item.id === pizza.id);
      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === pizza.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...pizza, quantity: 1 }] };
    }),

  // removeFromCart: true,
  removeFromCart: (pizzaId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== pizzaId),
    })),

  updateQuantity: (pizzaId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === pizzaId ? { ...item, quantity } : item
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));
