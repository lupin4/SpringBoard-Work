function InventoryItem({ number, name, type, quantity = 0, price = 0 }) {
  const totalValue = quantity * price;

  return (
    <div className="inventory-item">
      <h2>
        {number}. {name}
      </h2>
      <p>Type: {type}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
      {quantity < 5 && <Message>🚨 Low stock: Only {quantity} left!</Message>}
      {totalValue > 1000 && (
        <Message>
          💎 High value: Total value is ${totalValue.toFixed(2)}!
        </Message>
      )}
    </div>
  );
}
