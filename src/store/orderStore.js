import { create } from 'zustand';

export const useOrderStore = create((set) => ({
  orders: [],
  setOrders: (orders) => set({ orders }),
}));

// orders: [] = an empty array for starting with no orders.
// setOrders = for updating the orders state by calling set({ orders }).
