const API = "https://www.deckofcardsapi.com/api/deck";
let deckId = null;
const deckCardArea = document.getElementById("deckCardArea");
const getCardBtn = document.getElementById("getCardBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const shuffleMessage = document.getElementById("shuffleMessage");

// Initialize the deck on page load
async function initDeck() {
  try {
    const res = await fetch(`${API}/new/shuffle/?deck_count=1`);
    const data = await res.json();
    deckId = data.deck_id;
    // Clear existing cards when initializing a new deck
    deckCardArea.innerHTML = "";
  } catch (error) {
    console.error("Error fetching the deck:", error);
  }
}

// Function to draw a card
async function getCard() {
  try {
    const res = await fetch(`${API}/${deckId}/draw/?count=1`);
    const data = await res.json();
    if (data.success && data.cards.length > 0) {
      const card = data.cards[0];
      displayCard(card);
      // Re-enable Shuffle button if it was disabled due to empty deck
      shuffleBtn.disabled = false;
    } else {
      showShuffleMessage("No more cards in the deck.", true);
      getCardBtn.disabled = true; // Disable the Get Card button
      shuffleBtn.disabled = false; // Allow reshuffling
    }
  } catch (error) {
    console.error("Error drawing a card:", error);
  }
}

// Function to display the card with random transformations
function displayCard(card) {
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = card.name;
  img.classList.add("Card");

  // Random transformations
  const randomAngle = Math.random() * 90 - 45;
  const xPos = Math.random() * 40 - 20;
  const yPos = Math.random() * 40 - 20;
  img.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${randomAngle}deg)`;

  deckCardArea.appendChild(img);
}

// Function to show shuffle message
function showShuffleMessage(message, isError = false) {
  // Clear any existing messages
  shuffleMessage.textContent = "";
  shuffleMessage.classList.remove("show");

  // Set new message
  shuffleMessage.textContent = message;
  shuffleMessage.style.color = isError ? "#FF6347" : "#fff"; // Red color for errors
  // Trigger reflow to restart the CSS animation
  void shuffleMessage.offsetWidth;
  shuffleMessage.classList.add("show");

  // Hide the message after 2 seconds
  setTimeout(() => {
    shuffleMessage.classList.remove("show");
  }, 2000);
}

// Event listener for the Get Card button
getCardBtn.addEventListener("click", getCard);

// Event listener for the Shuffle button
shuffleBtn.addEventListener("click", async () => {
  shuffleBtn.disabled = true; // Disable the button to prevent multiple clicks
  await initDeck();
  showShuffleMessage("Deck is shuffled!");
  shuffleBtn.disabled = false; // Re-enable the button after shuffling
});

// Initialize the deck when the DOM is loaded
document.addEventListener("DOMContentLoaded", initDeck);
