document.getElementById("container").innerHTML = "JavaScript sandbox Test DIV";
console.log("JavaScript sandbox Test Console");

/*
//  ***ForEach Loop***
const colors = ["red", "green", "blue"];

// Regular old For Loop
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

// ***Filter Loop***
const products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruite" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruite" }
];
// Regular old For Loop
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


// ***Find Loop***
const users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

// Regular old For Loop
let user;
const filterdProducts = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Alex") {
    user = users[i];
    break;
  }
}
console.log(user);

const findUser = users.find(function(user) {
  return user.name === "Alex";
});
console.log(findUser);

// ***Complex Find Loop***
function Car(model) {
  this.model = model;
}

const cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

const findCar = cars.find(function(car) {
  return car.model === "Focus";
});
console.log(findCar);

const posts = [{ id: 1, title: "New Post" }, { id: 2, title: "Old Post" }];
const comment = { postId: 1, content: "awesome post" };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));


//  ***Every and Some Helpers***
const computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 }
];

let allComputersCanRunProgram = true;
let onlySomeComputersCanRunProgram = false;

// Regular old For Loop
for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];
  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}
console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

const everyComputer = computers.every(function(computer) {
  return computer.ram > 16;
});
console.log(`Every Helper: ${everyComputer}`);

const someComputer = computers.some(function(computer) {
  return computer.ram > 16;
});
console.log(`Some Helper: ${someComputer}`);

const names = ["Alexandria", "Matthew", "Joe"];

const everyName = names.every(function(name) {
  return name.length > 4;
});
console.log(`EVERY name has more than 4 characters: ${everyName}`);

const someName = names.some(function(name) {
  return name.length > 4;
});
console.log(`SOME name has more than 4 characters: ${someName}`);

//  ***Every Helper - Practical Example***

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

const username = new Field("username");
const password = new Field("password");
const birthDate = new Field("01/03/1984");

const fields = [username, password, birthDate];

const formIsValid = fields.every(function(field) {
  return field.validate();
});
console.log(`EVERY field is Validated: ${formIsValid}`);

if (formIsValid) {
  console.log(`Form Is Valid: ${formIsValid} - you can go in`);
} else {
  console.log(`Form Is Valid: ${formIsValid} - you can't go in`);
}

//  ***Reduce Helper***
// Regular old For Loop
const numbers = [10, 20, 30];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`the Sum is: ${sum} - Regular old For Loop`);

//Simple Reduce Helper
const numbersReduce = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
console.log(`the Sum is: ${numbersReduce} - Using the Reduce Helper`);

//Reduce Helper - List of Strings
const primaryColors = [{ color: "red" }, { color: "green" }, { color: "blue" }];
const primaryColorsReduce = primaryColors.reduce(function(
  previous,
  primaryColor
) {
  previous.push(primaryColor.color);
  return previous;
},
[]);
console.log(
  `list of Strings: ${primaryColorsReduce} - Using the Reduce Helper`
);

//Reduce Helper - Check For Balanced Parenthesis
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}
console.log(
  `Balanced Parenthesis Check: ${balancedParens(
    "()"
  )} - Using the Reduce Helper`
);

//  ***Arrow functions***
//regular old function
const regularAdd = function(a, b) {
  return a + b;
};
console.log(`Adding ${regularAdd(1, 3)} - regular old function`);

//arrow function
const arrowAdd = (a, b) => {
  return a + b;
};
console.log(`Adding ${arrowAdd(2, 3)} - arrow function`);

//arrow function - single expression (implicit return)
const arrowAddImp = (a, b) => a + b;
console.log(`Adding ${arrowAddImp(6, 6)} - arrow function Single line`);

//arrow function - single argument
const double = number => number * 2;
console.log(`double ${double(15)} - arrow function Single argument`);

//arrow function doubling array - BEFORE
numbers = [1, 2, 3];
const numbersMapBefore = numbers.map(function(number) {
  return 2 * number;
});
console.log(`double array ${numbersMapBefore} - arrow function BEFORE`);

//arrow function doubling array - AFTER
const numbersMapAfter = numbers.map(number => 2 * number);
console.log(`double array ${numbersMapAfter} - arrow function AFTER`);

//arrow function with NO lexical this
const noTeamArrow = {
  members: ["jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    return this.members.map(
      function(member) {
        return `${member} is on team ${this.teamName}`;
      }.bind(this) //bind(this) used to bind the function to the parent(noTeamArrow)
    );
  }
};
const noTeamLog = noTeamArrow.teamSummary();
console.log(noTeamLog);

//arrow function lexical this
const teamArrow = {
  members: ["jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
const teamLog = teamArrow.teamSummary();
console.log(teamLog);
*/

//  ***JavaScript object literals***
// the old way
// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function() {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function(title) {
//       return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }

// const inventory = [
//   { title: "Harry Potter", price: 10 },
//   { title: "Eloquent Javascript", price: 15 }
// ];

// const bookShop = createBookShop(inventory);
// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle("Harry Potter"));

// enhanced object literals
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eloquent Javascript", price: 15 }
];

const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Harry Potter"));

// L33
