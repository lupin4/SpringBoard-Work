/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
//rest operator is used to accept an arbitrary number of arguments as an array into a function
function animalSightings(...animals) {
  console.log(animals);
}

animalSightings("Lion", "Tiger", "Elephant", "Zebra");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const sanctuaryHabitats = [...forestHabitats, ...savannahHabitats];
console.log(sanctuaryHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
  ...rhinoStatus,
  population: 350,
  status: "Critically Endangered",
};

console.log(updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionProfileCopy = {
  ...lionProfile,
  genetics: {
    ssr: "Simple Sequence Repeat",
    snp: "Single Nucleotide Polymorphism",
    RADseq: "Restriction-site Associated DNA Sequencing",
    ged: "Gene Expression Data",
    wgs: "Whole Genome Sequencing",
  },
};

console.log(lionProfileCopy);

console.log(lionProfile === lionProfileCopy);

/**
 * Observations:
 * TODO: Explain here.
 * The original object and the copied object are two different objects.
 * The spread operator creates a shallow copy of the object, so changes to the nested properties in the copied object do not affect the original object.
 * Changes to the nested properties in the original object do affect the copied object.
 * This is because the  nested objects are shared between the original and copied objects.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const ecosystemHealthCopy = {
  ...ecosystemHealth,
  foodSupply: {
    ...ecosystemHealth.foodSupply,
    carnivores: "Low",
  },
};

console.log(ecosystemHealthCopy);
/*
 * Observations:
 * TODO: Explain here.
 * The original object and the copied object are two different objects.
 * The spread operator creates a shallow copy of the object, so changes to the nested properties in the copied object do not affect the original object.
 * Changes to the nested properties in the original object do affect the copied object.
 * This is because the nested objects are shared between the original and copied objects.
 */
