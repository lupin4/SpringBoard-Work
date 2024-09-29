console.log("Let's get this party started!");

const searchGifs = (searchTerm) => {
  //API Key
  const apiKey = "rJ5pjS9kZHMte0LCSdbrlIDcJapWF3zi";
  // Giphy API URL for searches
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1&offset=0&rating=g&lang=en`;
  // Fetch data from Giphy API using axios get request
  axios
    .get(apiUrl)
    .then((response) => {
      // Check if the response contains data
      if (response.data.data && response.data.data.length > 0) {
        // Extract the URL of the GIF from the response data
        const gifUrl = response.data.data[0].images.fixed_height.url; // Use fixed height
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
