// Console testing

console.log("Hello from src/browser.js");
console.log("A new line"); // autorefreshing in the browser console

// Event listener

const romain = document.getElementById("romain");

romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
  event.target.classList.toggle("img-circle");
});
