function App() {
  const spacePhenomena = [
    { id: 1, name: "Asteroid Belt", emoji: "☄️" },
    { id: 2, name: "Galactic Nebula", emoji: "🌌" },
    { id: 3, name: "Black Hole", emoji: "🕳️" },
    { id: 4, name: "Supernova Explosion", emoji: "💥" },
    { id: 5, name: "Pulsar", emoji: "⚡" },
    { id: 6, name: "Quasar", emoji: "💫" },
    { id: 7, name: "Exoplanet", emoji: "🪐" },
    { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
    { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
    { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" },
  ];

  const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
  //an Anonymous function to calculate random status for each phenomenon
  const randomStatus = () => {
    return observationStatuses[
      Math.floor(Math.random() * observationStatuses.length)
    ];
  };
  //looping through each phenomenon and assigning a random status
  spacePhenomena.forEach((phenomenon) => {
    observationStatuses.forEach((status) => {
      phenomenon.status = randomStatus();
    });
  });

  //mapping through each phenomenon and displaying its name, emoji, and status;
  return (
    <div>
      <h1>Space Phenomena Tracker</h1>
      <ul>
        {spacePhenomena.map((phenomenon) => (
          //using the key prop to uniquely identify each list item by its index
          // I know that this is not best practice but for the sake of simplicity I am doing this
          // Here I display the planet name, emoji and the status of the planet
          <li key={phenomenon.id}>
            {phenomenon.name} {phenomenon.emoji} {phenomenon.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
