document.getElementById("container").innerHTML = "JavaScript sandbox Test DIV";
console.log("JavaScript sandbox Test Console");

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
