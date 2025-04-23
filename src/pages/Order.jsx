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
      <h2>Your Order</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="order-list">
            {cart.map((item) => (
              <li key={item.id} className="order-item"> {/* Use item.id as the key */}
                <img src={item.image} alt={item.name} className="order-image" />
                <div className="order-info">
                  <h4>{item.name}</h4>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                  <input
                    type="number"
                    min="1"
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
              <strong>Total:</strong> ${total.toFixed(2)}
            </p>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;