
// Classes example

var classesSection = getSection(".classes");
setupOnClick(classesSection, function() {

  const rob = new Robot("Rob");
  rob.move(5);
  const result = "robot: " + rob;

  displayResult(classesSection, result);
});


// Functions example

var functionsSection = getSection(".functions");
setupOnClick(functionsSection, function() {

  // Note: in JS you can define functions anywhere

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
  // You use `backticks` instead 'quotes' and inside you can use one or more ${expression}.
  // The expressions will be calculated and the result will be injected in the final string.
  const result = `${a}^2 is... ${square1(a)}, yes ${square2(a)}. I told you, it's ${square3(a)}.`;
  console.log(result);

  displayResult(functionsSection, result);
});





// Convenience functions

/** Finds an element with class ".section" and also the given classSelector */
function getSection(classSelector) {
  return document.querySelector(classSelector + ".section")
}

/** Sets the onclick callback on the <button> inside the sectionElement */
function setupOnClick(sectionElement, callback) {
  sectionElement.querySelector("button").onclick = callback;
}

/** Sets the resultText in an element with class "result" inside the sectionElement */
function displayResult(sectionElement, resultText) {
  sectionElement.querySelector(".result").textContent = resultText;
}
