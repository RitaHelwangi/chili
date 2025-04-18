import React from "react";
import "./../styles/index.css";

const Receipt = ({ items }) => {
  if (!items || items.length === 0) return <p>No items in receipt.</p>;

  const total = items.reduce((acc, item) => acc + Number(item.price || 0), 0);

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item.name} - {item.price} kr</li>
        ))}
      </ul>
      <h3>Total: {total} kr</h3>
    </div>
  );
};

export default Receipt
