import React from 'react'
import { useOrderStore } from '../data/orderStore'
import '../pages/Order.css'

function PizzaCard({ pizza }) {
  const addToCart = useOrderStore(state => state.addToCart)
  console.log("adding to cart", pizza)
  addToCart(pizza)

  return (
    <div className='pizza-card'>
      <img src={pizza.image} alt={pizza.name} className='pizza-image' />
      <div className='pizza-details'>
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <p><strong>${pizza.price}</strong></p>
        <button onClick={() => addToCart(pizza)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default PizzaCard
