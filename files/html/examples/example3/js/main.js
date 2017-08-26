
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

// Note: from now on we now use arrow functions

// Callbacks example

setupExample(".callbacks.section", (sectionDiv) => {

  const ordy = new Robot("Ordy");

  const numbers = [10, 20];

  ordy.performAction(() => {
    console.log("the robot is washing the dishes");
  });

  ordy.performAction(() => {
    console.log("the robot, just for fun, is adding a number to the array");
    numbers.push(30);
  });

  const result = `robot: ${ordy}, numbers array: ${numbers}`;

  displayResult(sectionDiv, result);
});


// AJAX examples

/** All the AJAX examples use this end-point */
const githubReposUrl = 'https://api.github.com/search/repositories';

// AJAX example (using XMLHttpRequest class)

setupExample(".ajax.section", (sectionDiv) => {

  const searchTerm = document.querySelector("input").value;

  const url = githubReposUrl + '?q=' + searchTerm;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = () => {
    console.log("AJAX request finished correctly :)");
    const data = JSON.parse(xhr.responseText); // converts response to JSON object
    const result = `Found ${data.total_count} repositories about ${searchTerm}`;
    displayResult(sectionDiv, result);
  };

  xhr.onerror = () => {
    console.log("AJAX request finished with an error :(");
    displayResult(sectionDiv, `There was an error: ${xhr.statusText}`);
  };

  displayResult(sectionDiv, "sending request with XMLHttpRequest...");
  xhr.send();
});

document.querySelector(".ajax.section input").value = 'codethen';


// AJAX example (using fetch function)

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

setupExample(".fetch.section", (sectionDiv) => {

  const searchTerm = document.querySelector("input").value;

  const url = githubReposUrl + '?q=' + searchTerm;

  displayResult(sectionDiv, "sending request with fetch...");

  fetch(url)
    .then(response => response.json()) // tranform response to JSON object (like doing JSON.parse)
    .then(data => {
      console.log("AJAX request finished correctly :)");
      const result = `Found ${data.total_count} repositories about ${searchTerm}`;
      displayResult(sectionDiv, result);
    })
    .catch(error => {
      console.log("AJAX request finished with an error :(");
      displayResult(sectionDiv, `There was an error: ${error}`);
    });
});

document.querySelector(".fetch.section input").value = 'codethen';


// AJAX example (using axios library)

// axios is very similar to fetch, but has a couple of advantages, especially:
// - it returns the response as JSON by default
// - response enters the then() callback only if the response is OK (status is 2xx)
// - it's easier to use in tests (although this is not used here)

// https://github.com/mzabriskie/axios

setupExample(".axios.section", (sectionDiv) => {

  const searchTerm = document.querySelector("input").value;

  const url = githubReposUrl + '?q=' + searchTerm;

  displayResult(sectionDiv, "sending request with axios...");

  axios.get(url)
    .then(response => { // axios automatic transforms to JSON
      console.log("AJAX request finished correctly :)");
      const result = `Found ${response.data.total_count} repositories about ${searchTerm}`;
      displayResult(sectionDiv, result);
    })
    .catch(error => {
      console.log("AJAX request finished with an error :(");
      displayResult(sectionDiv, `There was an error: ${error}`);
    });
});

document.querySelector(".axios.section input").value = 'codethen';




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
