// Testing
const fruits = ["Apple", "Banana"];
console.log(typeof fruits); // => "object", don't use typeof with more complex data!
console.log(Array.isArray(fruits)); // => true

// CRUD
// Create
fruits.push("Kiwi");
// Read
const apple = fruits[0];
// Update
fruits[0] = "Pineapple";
// Delete
fruits.splice(0, 1); // remove item at index 0, there are not delete methods

// Loop
// ES6
fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase());
});
// ES5 (Old)
fruits.forEach(function(fruit) {
  console.log(fruit.toUpperCase());
});


