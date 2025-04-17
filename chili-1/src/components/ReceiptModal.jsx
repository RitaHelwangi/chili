import React from "react";

const ReceiptModal = ({ cart, total, onClose }) => {
  const receiptNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="receipt-modal">
      <div className="receipt-content">
        <h2 className="receipt-title">Receipt</h2>
        <p className="receipt-number">Receipt No: {receiptNumber}</p>
        <ul className="receipt-list">
          {cart.map((item, index) => (
            <li key={index} className="receipt-item">
              {item.name} – {item.price}kr
            </li>
          ))}
        </ul>
        <p className="receipt-total">Total: {total}kr</p>
        <button className="receipt-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ReceiptModal;
