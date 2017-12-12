console.log("Hello from src/browser.js");

console.log("A new line"); // autorefreshing in the browser console

const romain = document.getElementById("romain");

romain.addEventListener("click", (event) => {
  console.log(event);
});
