
// Classes example

setupExample(".classes.section", function(sectionDiv) {

  const rob = new Robot("Rob");
  rob.move(5);
  const result = "robot: " + rob;

  displayResult(sectionDiv, result);
})


// Functions example

setupExample(".functions.section", function(sectionDiv) {

  // Note: in JS you can define functions anywhere, even inside other functions

  // named function form
  function square1(x) {
    return x * x;
  }

  // anonymous function form...
  const square2 = function(x) {
    return x * x;
  };

  // arrow function form...
  const square3 = x => x * x;

  // Now we can call the 3 functions as usual
  const a = 3;
  console.log(a + "^2 is " + square1(a));
  console.log(a + "^2 is " + square2(a));
  console.log(a + "^2 is " + square3(a));

  // Note: this is template literals (string interpolation), available in the latest JavaScript.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  // You use `backticks` instead 'quotes' and inside you can use one or more ${expression}.
  // The expressions will be calculated and the result will be injected in the final string.
  //
  const result = `${a}^2 is... ${square1(a)}, yes ${square2(a)}. I told you, it's ${square3(a)}.`;

  displayResult(sectionDiv, result);
});





// Convenience functions

/**
 * Finds the element that has the given classSelector (we call it sectionContainer),
 * and configures the button inside so when it's clicked, the
 * sectionExample function will be called (with sectionContainer as an argument).
 */
function setupExample(classSelector, sectionExample) {

  var sectionContainer = document.querySelector(classSelector);

  // querySelector() can be used on any element to look for elements inside
  // https://developer.mozilla.org/en/docs/Web/API/Element/querySelector
  //
  // the jQuery find() method is similar
  // https://api.jquery.com/find/

  sectionContainer.querySelector("button").onclick = function() {
    sectionExample(sectionContainer);
  };
}

/** Sets the resultText in an element with class "result" inside the sectionElement */
function displayResult(sectionElement, resultText) {
  console.log(resultText);
  sectionElement.querySelector(".result").textContent = resultText;
}
