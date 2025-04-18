// src/components/Receipt.jsx
import React from 'react';

const Receipt = ({ items }) => {
  return (
    <div className="receipt-container">
      {items.length === 0 ? (
        <p>No receipt data.</p>
      ) : (
        <ul className="receipt-list">
          {items.map((item, index) => (
            <li key={index} className="receipt-item">
              <div><strong>Product:</strong> {item.name}</div>
              <div><strong>Quantity:</strong> {item.quantity}</div>
              <div><strong>Price:</strong> ${item.price}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Receipt