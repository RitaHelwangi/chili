import { useEffect, useState } from 'react';
import { fetchReceiptData } from '../api';
import ReceiptItem from './ReceiptItem';
import './Receipt.css';

function Receipt() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchReceiptData().then(data => setItems(data));
  }, []);

  const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div className="receipt-container">
      <h2 className="receipt-title"> Your receipt</h2>

      {items.map((item, index) => (
        <ReceiptItem key={index} item={item} />
      ))}

      <div className="receipt-total">
        <span>Total</span>
        <span>{total} kr</span>
      </div>
    </div>
  );
}

export default Receipt
