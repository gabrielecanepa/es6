// Definition

// 1) Normal definition
function square(x) {
  return x * x;
}

// 2) Arrow definition (most used)
const square = (x) => {
  return x * x;
};

// 3) Arrow inline definition with **implicit** return
const square = x => x * x; // only case in JavaScript with implicit return!


// Calling
let theSquare = square(10);
console.log(theSquare); // => 100
