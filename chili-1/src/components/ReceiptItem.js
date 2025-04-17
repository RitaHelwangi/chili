function ReceiptItem({ item }) {
    return (
      <div className="receipt-item">
        <span>{item.name}</span>
        <span>{item.price} kr</span>
      </div>
    );
  }
  
  export default ReceiptItem
  