// index.js

import express from "express";
import {
  fetchGraphQL,
  GET_ALL_FILMS,
  GET_CHARACTER_BY_ID,
} from "./starwarsQueries.js";

const app = express();
const PORT = 3000;

// Route for Listing All Films
app.get("/films", async (req, res) => {
  const data = await fetchGraphQL(GET_ALL_FILMS);
  res.json(data.allFilms.films);
});

// Route for Fetching a Specific Character by ID (requires query parameter 'id')
app.get("/character", async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).send("Character ID is required.");
  const data = await fetchGraphQL(GET_CHARACTER_BY_ID, { id });
  res.json(data.person);
});

// Additional routes can be added for other queries...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
