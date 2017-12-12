// Syntax
const student = {
  firstName: "Boris",
  lastName: "Paillard"
}; // same syntax of a JSON string from an API, JSON = JavaScript Object Notation

// Reading properties
console.log(student.firstName);
console.log(student['firstName']); // same result

// Setting properties
student.firstName = "Romain";
console.log(student.firstName); // => "Romain"

// Looping with Object.keys
Object.keys(student).forEach((key) => {
  const value = student[key]; // optional assignment
  console.log(`The student ${key} is ${value}`);
}); // Object.keys returns an array, forEach can be called only on arrays



