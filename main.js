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

*/
// ***Filter Loop***
const products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruite" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruite" }
];
// Reguler old For Loop
const filterdProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].type === "fruite") {
    filterdProducts.push(products[i]);
  }
}
console.log(filterdProducts);

const newfilterdProducts = products.filter(function(product) {
  return product.type === "fruite";
});
console.log(newfilterdProducts);

const complexproducts = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruite", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 9 },
  { name: "orange", type: "fruite", quantity: 3, price: 5 }
];
//type is 'vegetable', quantity is greater than 0, price is less than 10
const complexfilterdProducts = complexproducts.filter(function(product) {
  return (
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
  );
});
console.log(complexfilterdProducts);

const post = { id: 4, title: "New Post" };
const comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was OK" },
  { postId: 4, content: "neat" }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));
