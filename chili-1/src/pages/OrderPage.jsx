import React, { useState } from "react";
import Header from "../components/Header";
import ReceiptModal from "../components/ReceiptModal";

const menuItems = [
  { id: 1, name: "Garlic bread", price: 69, type: "Side dish" },
  { id: 2, name: "Tagliatelle Alfredo", price: 249, type: "Main dish" },
];

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderTime] = useState("Sunday, Apr 13, 05:08PM");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const getTotal = () => cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="order-page">
      <Header />
      <div className="main-container">
        {/* Left side */}
        <div className="left-panel">
          <h2 className="welcome-text">Welcome back to Chillis – enjoy your meal!</h2>
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-info">
                <p className="menu-name">{item.name}</p>
                <p className="menu-type">{item.type}</p>
              </div>
              <div className="menu-controls">
                <p className="menu-price">{item.price}kr</p>
                <button onClick={() => addToCart(item)} className="add-btn">+</button>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">-</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="right-panel">
          <h3 className="payment-title">Payment</h3>
          <div className="payment-methods">
            <div>Saved card: **** **** **** 6578</div>
            <div>Swish</div>
            <div>PayPal</div>
            <div>Klarna</div>
          </div>

          <div className="cart-summary">
            <h4>Summary:</h4>
            <p>Order: {getTotal()}kr</p>
            <p>Total (inc. tax): {getTotal()}kr</p>
          </div>

          <p>Delivery/Pick up time:</p>
          <div className="delivery-time">{orderTime}</div>

          <button
            className="place-order-btn"
            onClick={() => setShowReceipt(true)}
          >
            Place order
          </button>
        </div>
      </div>

      {showReceipt && (
        <ReceiptModal
          cart={cart}
          total={getTotal()}
          onClose={() => setShowReceipt(false)}
        />
      )}
    </div>
  );
};

export default OrderPage;
