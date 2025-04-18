import { create } from 'zustand';

export const useOrderStore = create((set) => ({
  orders: [],
  setOrders: (orders) => set({ orders }),
}));
