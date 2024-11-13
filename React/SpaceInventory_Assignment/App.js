function App() {
  const inventoryItems = [
    { name: "Oxygen Tank", type: "Equipment", quantity: 3, price: 150.0 },
    { name: "Freeze-Dried Ice Cream", type: "Food", quantity: 20, price: 5.99 },
    { name: "Space Suit", type: "Equipment", quantity: 2, price: 2500.0 },
    { name: "Water Filter", type: "Tool", quantity: 5, price: 75.5 },
    { name: "Solar Panel", type: "Equipment", quantity: 10, price: 300.0 },
    { name: "Navigation Module", type: "Technology", price: 1200.0 },
    { name: "First Aid Kit", type: "Medical", quantity: 4, price: 22.35 },
    { name: "Hydroponic Seeds", type: "Food", quantity: 30, price: 10.0 },
    {
      name: "Communication Radio",
      type: "Technology",
      quantity: 3,
      price: 199.99,
    },
    { name: "Thruster Fuel", type: "Fuel", quantity: 50, price: 45.0 },
  ];

  return (
    <div>
      <h1>Spacecraft Inventory</h1>
      {inventoryItems.map((item, index) => (
        <InventoryItem key={index} number={index + 1} {...item} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
