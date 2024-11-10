// starWarsQueries.js

// Helper function to make GraphQL requests
export async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(
    "https://swapi-graphql.netlify.app/.netlify/functions/index",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );
  const result = await response.json();
  return result.data;
}

// Basic Tasks

// List All Films
export const GET_ALL_FILMS = `
  query {
    allFilms {
      films {
        title
      }
    }
  }
`;

// Fetch a Specific Character by ID
export const GET_CHARACTER_BY_ID = `
  query GetCharacter($id: ID!) {
    person(id: $id) {
      name
    }
  }
`;

// Explore the First 5 Planets
export const GET_FIRST_FIVE_PLANETS = `
  query {
    allPlanets(first: 5) {
      planets {
        name
      }
    }
  }
`;

// Starships Information - Fetch names and models of 3 starships
export const GET_THREE_STARSHIPS = `
  query {
    allStarships(first: 3) {
      starships {
        name
        model
      }
    }
  }
`;

// Intermediate Tasks

// Character and Their Starships - List names of starships piloted by each of the first 5 characters
export const GET_CHARACTERS_AND_STARSHIPS = `
  query {
    allPeople(first: 5) {
      people {
        name
        starships {
          name
        }
      }
    }
  }
`;

// Species and Their Languages - Retrieve names and languages of 5 species
export const GET_SPECIES_AND_LANGUAGES = `
  query {
    allSpecies(first: 5) {
      species {
        name
        language
      }
    }
  }
`;

// Planets and Their Climates - Query names and climates of 5 planets
export const GET_PLANETS_AND_CLIMATES = `
  query {
    allPlanets(first: 5) {
      planets {
        name
        climate
      }
    }
  }
`;

// Vehicles and Their Costs - Get names and cost in credits for 3 vehicles
export const GET_VEHICLES_AND_COSTS = `
  query {
    allVehicles(first: 3) {
      vehicles {
        name
        costInCredits
      }
    }
  }
`;

// Advanced Tasks

// Characters in a Specific Film - List all characters appearing in a given film by ID
export const GET_CHARACTERS_IN_FILM = `
  query GetCharactersInFilm($filmId: ID!) {
    film(id: $filmId) {
      title
      characterConnection {
        characters {
          name
        }
      }
    }
  }
`;

// Multi-Film Characters - Find characters that appear in more than one film
export const GET_MULTI_FILM_CHARACTERS = `
  query {
    allPeople {
      people {
        name
        filmConnection {
          films {
            title
          }
        }
      }
    }
  }
`;

// Aggregate Film Statistics - Calculate the total number of characters across all films
export const GET_TOTAL_CHARACTERS_COUNT = `
  query {
    allFilms {
      films {
        characterConnection {
          totalCount
        }
      }
    }
  }
`;

// Complex Tasks

// Full Character Profiles - Compile a profile for a character with films, starships, and homeworld
export const GET_FULL_CHARACTER_PROFILE = `
  query GetCharacterProfile($id: ID!) {
    person(id: $id) {
      name
      homeworld {
        name
      }
      starships {
        name
      }
      filmConnection {
        films {
          title
        }
      }
    }
  }
`;

// Link Characters with Their Planets - Query the first 5 characters, including name and population of their homeworld
export const GET_CHARACTERS_WITH_HOMEWORLD = `
  query {
    allPeople(first: 5) {
      people {
        name
        homeworld {
          name
          population
        }
      }
    }
  }
`;

// Vehicles, Their Pilots, and Pilots' Species - List names, pilots, and pilots' species for the first 3 vehicles
export const GET_VEHICLES_PILOTS_AND_SPECIES = `
  query {
    allVehicles(first: 3) {
      vehicles {
        name
        pilots {
          name
          species {
            name
          }
        }
      }
    }
  }
`;

// Films and Their Associated Entities - List related characters, planets, and starships for the first 3 films
export const GET_FILMS_WITH_ENTITIES = `
  query {
    allFilms(first: 3) {
      films {
        title
        characterConnection {
          characters {
            name
          }
        }
        planetConnection {
          planets {
            name
          }
        }
        starshipConnection {
          starships {
            name
          }
        }
      }
    }
  }
`;
