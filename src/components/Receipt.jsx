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

// Create a functional component called Receipt, which takes items as a prop.
// If there are no items or the list is empty, show a message "No items in receipt.".
// const total = for calculating total price. Add up all item.price values.
// Loop through each item and show them. (.map)
// Show each item’s details, , using the index as the key.