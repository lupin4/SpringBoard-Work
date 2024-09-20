// object enhancement 
// shorthand syntax for assigning object properties to variables

function makePerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    isStudent: true,
  };
}

const person = makePerson("John", "Doe", 20);

console.log(person);

//object methods
// const math = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
// };

// without having to name object methods by using function name as the property name
const math = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};






