const firstName = "Boris";
const lastName = "Paillard";

// Interpolation
const fullName = `${firstName} ${lastName}`;
var fullName = firstName + " " + lastName; // in old JavaScript

// Split
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthString.split(","); // months is an array of strings

// Regex (validation and extraction)
const text = "My phone number is +336123456789";
const pattern = /\+\d+/;
const match = text.match(pattern); // return an object
const match = pattern.exec(text); // same with RegExp
console.log(match[0]); // => "+336123456789"

