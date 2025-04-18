import React, { useEffect, useState } from 'react';
import Receipt from '../components/Receipt';
import '../styles/index.css';

const api = 'https://forverkliga.se/JavaScript/api/jsonStore.php';
const key = 'chilis-unique-key';

const ReceiptPage = () => {
  const [orderData, setOrderData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}?action=load&key=${key}`);

        const text = await response.text();

        // Checking data 
        if (text.startsWith('<!DOCTYPE html>')) {
          throw new Error('API responded with HTML instead of JSON. Check your key or API endpoint.');
        }

        const data = JSON.parse(text);

        if (data.status === 'success') {
          setOrderData(data.data);
        } else {
          throw new Error('API returned unsuccessful status');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load receipt data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="receipt-page">
      <h1>Receipt</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <Receipt items={orderData} />
      )}
    </div>
  );
};

export default ReceiptPage
 


/*import React, { useEffect, useState } from 'react';
import Receipt from '../components/Receipt';
import '../styles/index.css';

const ReceiptPage = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // test with using mock data (instead from API)
    const mockOrders = [
      { name: 'Burger', quantity: 2, price: 85 },
      { name: 'Fries', quantity: 1, price: 40 },
      { name: 'Soda', quantity: 3, price: 20 }
    ];
    setOrderData(mockOrders);
  }, []);

  return (
    <div className="receipt-page">
      <h1>Receipt</h1>
      <Receipt items={orderData} />
    </div>
  );
};

export default ReceiptPage*/
