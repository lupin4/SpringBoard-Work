console.log("Let's get this party started!");

const searchGifs = (searchTerm) => {
  //API Key
  const apiKey = "API_KEY_HERE";
  // Giphy API URL for random GIFs
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}&rating=g`;
  // Fetch data from Giphy API using axios get request
  axios
    .get(apiUrl)
    .then((response) => {
      // Check if the response contains data
      if (response.data.data) {
        // Extract the URL of the GIF from the response data
        // Use fixed height so all Gif's are the same size
        const gifUrl = response.data.data.images.fixed_height.url;
        // Display the GIF on the webpage
        displayGif(gifUrl);
      } else {
        console.error("No GIFs found for the search term.");
      }
    })
    .catch((error) => console.error("Error fetching GIF:", error));
};

// Get references to the input elements
const searchInput = document.getElementById("search-input");
// Get references to the search button element
const searchButton = document.getElementById("search-button");
// Get references to the gif container element
const gifContainer = document.getElementById("gif-container");
// Get references to the clear button element
const clearButton = document.getElementById("clear-button");

// Function to display a GIF on the webpage
const displayGif = (gifUrl) => {
  //   gifContainer.innerHTML = "";
  const img = document.createElement("img");
  img.src = gifUrl;
  gifContainer.appendChild(img);
};

// Function to clear all GIFs from the page
const clearGifs = () => {
  gifContainer.innerHTML = "";
};

// Event listeners
clearButton.addEventListener("click", clearGifs);
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  searchGifs(searchTerm);
  searchInput.value = "";
});

// Add event listener for Enter key press on the search input
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});
