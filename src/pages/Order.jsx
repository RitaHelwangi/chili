import React, { useState } from "react";
import { useOrderStore } from "../data/orderStore";
import "../pages/Order.css";
import { NavLink } from "react-router-dom";


function Order() {
  const cart = useOrderStore((state) => state.cart);
  const removeFromCart = useOrderStore((state) => state.removeFromCart);
  const updateQuantity = useOrderStore((state) => state.updateQuantity);
  const clearCart = useOrderStore((state) => state.clearCart);
  const [isclicked,setIsclicked]=useState(false)
  function checkoutHandler(){
	setIsclicked(true)
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className='order-page'>
      <h2>Your Order</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className='order-list'>
            {cart.map(item => (
              <li key={item.id} className='order-item'>
                <img src={item.image} alt={item.name} className='order-image' />
                <div className='order-info'>
                  <h4>{item.name}</h4>
                  <p>${item.price} x {item.quantity}</p>
                  <input
                    type='number'
                    min='1'
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="order-summary">
            <p>
              <strong>Total:</strong> {total.toFixed(2)} SEK
            </p>
            <div className="order-buttons">
              <button className="clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="checkout-btn" onClick={checkoutHandler}>Checkout</button>
			 
            </div> {isclicked && (
				<div className="tack-div">
				<h3>Thank you for ordering from <b>Chili!</b></h3>
				<p>Your food is being prepared right now</p>
				<p>See you soon! 🌶️</p>
				<NavLink to="/"><button className="back-button">Back to Home</button></NavLink>
		
			  </div>
			  )}
          </div>
        </>
      )}
    </div>
  )
}

export default Order
