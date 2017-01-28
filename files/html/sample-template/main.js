
// Like System.out.println("working!") in Java
console.log("working!");


// Variables always declared with `let` or `var` (doesn't specify type)
let message = "hello";
console.log("message: " + message);


// `if`, `while` and `for` are very similar to Java
let price = 50;

if (price > 20) {
  console.log("Price is high: " + price);
} else {
  console.log("Price is low: " + price);
}

while (price >= 30) {
  price -= 5;
}
console.log("Reduced price: " + price);

for (let i=0; i<5; i++) {
  console.log("Number: " + i);
}


// Functions are defined with `function`.
// Types (parameters or result) are not specified, as usual.
function sum(a, b) {
  return a + b;
}

let result = sum(5,6);
console.log("5 + 6 is " + result);


// With Javascript we can get HTML elements and do things with them

// To use getElementById we need to set an id to an element
let panel = document.getElementById("image-panel");
console.log("Panel:");
// when printing HMTL elements, they are displayed in a special interactive way
console.log(panel);

// Can change style, classes and other properties of HTML elements
panel.style.height = "200px";
panel.classList.add("highlight-border");

// With querySelector we can use a CSS selector to get elements
// querySelector() gets the first element matched
// querySelectorAll() gets all the elements matched (see later)
let h1 = document.querySelector(".image h1");
console.log("h1 element: ", h1); // log can print several things, separated with commas


// Reference an existing function
// It works even if function is defined below
h1.onclick = changeHeaderToGreen;

function changeHeaderToGreen() {
  h1.style.color = "green";
}



let appleLogo = document.querySelector(".logo img");

// Define function in place (inline, anonymous function)
// When the apple logo is clicked, change header to blue and also change the bg image
appleLogo.onclick = function() {
  h1.style.color = "darkorange";
  h1.textContent = "LEMONS";
  panel.style["background-image"] = "url('http://i.huffpost.com/gen/1293800/images/o-LEMONS-facebook.jpg')";
}

// Find all option elements
let options = document.querySelectorAll(".menu span");
console.log(options);

// For each option, when it's clicked: change the header to green
// This is like in Java: for (Element option : options) { ... }
for (let option of options) {
  option.onclick = changeHeaderToGreen;
}
