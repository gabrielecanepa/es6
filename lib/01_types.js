// Basic types
console.log(typeof 1); // puts 1.class in Ruby
console.log(typeof "string");
console.log(typeof true);

// Null and undefined
let age; // undefined
let name = null;

// Turn a string into a number and viceversa
const input = "42";
const number = Number.parseInt(input, 10); // the second argument (10) is the base
const string = number.toString();
console.log(typeof input);
console.log(typeof number);
console.log(typeof string);

