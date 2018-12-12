document.getElementById("container").innerHTML = "JavaScript sandbox Test DIV";
console.log("JavaScript sandbox Test Console");

/*
//  ***ForEach Loop***
const colors = ["red", "green", "blue"];

// Reguler old For Loop
for (let i = 0; i < colors.length; i++) {
  const colorsElement = colors[i];
  console.log(colorsElement);
}

// ForEach Loop
colors.forEach(function(color) {
  console.log(color);
});
// ForEach Loop with a Fat Arrow
colors.forEach(color => {
  console.log(color);
});

// ForEach Loop - adding numbers
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(function(number) {
  sum += number;
});
console.log(sum);

// ForEach Loop - adding numbers (Reference to External Function)
function adder(number) {
  sum += number;
}
numbers.forEach(adder);
console.log(sum);
*/

// ***Map Loop***
const numbers = [1, 2, 3];
let doubleNumbers = [];
//the way it was done in the past
for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);
//Map Loop
const doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled);

const cars = [
  { model: "buick", price: "Cheap" },
  { model: "Camero", price: "Expensive" }
];

const prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);
