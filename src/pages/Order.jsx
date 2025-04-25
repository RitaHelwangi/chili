import React from "react";
import { useOrderStore } from "../data/orderStore";
import "../pages/Order.css";

function Order() {
  const cart = useOrderStore((state) => state.cart);
  const removeFromCart = useOrderStore((state) => state.removeFromCart);
  const updateQuantity = useOrderStore((state) => state.updateQuantity);
  const clearCart = useOrderStore((state) => state.clearCart);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  console.log(cart); // Debugging: Log the cart

  return (
    <div className="order-page">
      <h2 className="order-summary">Your Order</h2>
      {cart.length === 0 ? (
        <p className="order-summary">Your cart is empty.</p>
      ) : (
        <>
          <ul className="order-list">
            {cart.map((item) => (
              <li key={item.id} className="order-item">
                <img src={item.image} alt={item.name} className="order-image" />
                <div className="order-info">
                  <h4>{item.name}</h4>
                  <p>
                    {item.price} x {item.quantity} SEK
                  </p>
                  <div className="order-controls">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="quantity-input"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
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
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;