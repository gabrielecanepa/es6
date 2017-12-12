const capitalize = (word) => {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

console.log(capitalize("boris")); // => Expected: Boris
console.log(capitalize("ROMAIN")); // => Expected: Romain
