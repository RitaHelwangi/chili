import { create } from 'zustand';


const useDishStore = create((set) => ({
  dish: {
    title: 'Deep Dish Pizza',
    description: 'platt bröd som gräddas med pålägg.',
    price: '149 kr',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/250px-Eq_it-na_pizza-margherita_sep2005_sml.jpg', 
  },
  setDish: (dish) => set({ dish }),
}));

export default useDishStore;