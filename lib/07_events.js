// Full documentation https://developer.mozilla.org/en-US/docs/Web/Events

// Most common HTML DOM event types, used in every web application:
// → DOMContentLoaded (used to load the script when the DOM has already been parsed)
// → blur (or 'focusout', used when leaving form inputs, like in validations)
// → click
// → change (used, for example, when selecting in dropdowns or typing in a textarea)
// → focus (used when clicking inside form inputs)
// → keyup (used to react to keystrokes)
// → mouseover
// → resize (applied when the window is resized)
// → scroll (applied when the window is scrolled)
// → submit (used when a form is submitted, just before the request is sent)
// → touchstart (the less used, it can detect when a finger presses a touchscreen)


// Event listener
element.addEventListener(eventType, (event) => {
  // Code to be executed (callback)
  // (event) => { ... } is the function and can be assigned to a constant/variable, as follows (ES6 feature)
});


// Extracting event callback
const eventFunction = (event) => {
  // ...
};

element.addEventListener(eventType, eventFunction);


// Extracting event listener binding (forEach and other functions)
images.forEach((image) => {
  image.addEventListener("click", toggleImage);
});

const bindClickImage = (image) => {
  image.addEventListener("click", toggleImage);
};

images.forEach(bindClickImage);


// DOMContentLoaded
// -> used to put the script in the <head> (for specific purposes) and keep it working
// -> when the DOM is parsed by the browser, the function is executed
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  // An addEventListener code
});


// Removing an event listener
element.removeEventListener(eventType, listener);


// Preventing default behaviour
document.getElementById("element").addEventListener(eventType, (event) => {
  event.preventDefault();
  // Do something else
});











