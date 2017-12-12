// ES6 arrow definition
const capitalize = (word) => {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

console.log(capitalize("boris")); // => Expected: Boris
console.log(capitalize("ROMAIN")); // => Expected: Romain

// ES6 arrow inline definition
const capitalizeInline = word => word[0].toUpperCase() + word.substr(1).toLowerCase();

console.log(capitalizeInline("boris")); // => Expected: Boris
console.log(capitalizeInline("ROMAIN")); // => Expected: Romain
