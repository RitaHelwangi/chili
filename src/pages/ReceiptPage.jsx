import React from "react";
import Receipt from "../components/Receipt";
import { useOrderStore } from "../store/orderStore";

const ReceiptPage = () => {
  const { orders } = useOrderStore();

  return (
    <div className="page">
      <Receipt items={orders} />
    </div>
  );
};

export default ReceiptPage

// Define a new React component named ReceiptPage.
// Get the orders data from the order store using the custom hook. (const { orders } = useOrderStore();)
// (return) Render a div.page with Receipt, passing orders as items.


// testing receipt
/*
import React, { useEffect } from "react";
import Receipt from "../components/Receipt";
import { useOrderStore } from "../store/orderStore";

const ReceiptPage = () => {
  const { orders, setOrders } = useOrderStore();

  // จำลองคำสั่งซื้อ (mock data)
  useEffect(() => {
    setOrders([
      { name: "Spicy Chicken", price: 99 },
      { name: "Cheesy Fries", price: 49 },
      { name: "Coke", price: 25 },
    ]);
  }, []);

  return (
    <div className="page">
      <Receipt items={orders} />
    </div>
  );
};

export default ReceiptPage
*/
