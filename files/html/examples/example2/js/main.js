
// Check console for these examples
exampleArrays();
exampleObjects();

// These examples are triggered with buttons
setupExampleFromJsToJquery();
setupExampleModifyElements();
setupExampleCreateAndAddElements();


/**
 * Example of how arrays can be used in JavaScript
 */
function exampleArrays() {

  console.log('--- arrays ---');

  const numbers = [10, 20, 30];

  // Usage of arrays in JavaScript is similar to Java
  console.log("The array " + numbers + " has " + numbers.length + " items");
  console.log("The first item is " + numbers[0]);

  numbers.push(40); // In JavaScript arrays can be modified, like Java lists
  // Notice `const` avoids reassignation to the variable but we can modify the array

  console.log("Now the array has these numbers: " + numbers);

  const names = []; // empty array
  names.push('peter');
  names.push('mary');
  names.push(250); // we can add anything we want, so be careful
  console.log("names: " + names);
}

/**
 * Example of how objects can be used in JavaScript
 */
function exampleObjects() {

  console.log('--- objects ---');

  // Objects in JavaScript are very similar to Map in Java.
  // In Maps we usually say that keys are mapped/associated to values,
  // and in JS Objects we usually say that properties have values
  // But it's very similar.

  // We can define objects in multiple lines...
  const person1 = {
    name: 'peter',
    age: 20,
    city: 'Manchester'
  };

  // ...or in one line (depending on how big it is, you decide)
  const person2 = { name: 'susan', age: 30 };

  // We can add more properties to an object after be defined it
  person2.address = '5th Pine Street';
  // Notice `const` avoids reassignation to the variable but we can modify the object

  // Since we can use any properties, be careful with objects!
  console.log(person1.name + " lives in " + person1.city);
  console.log(person2.name + " lives in " + person2.address);

  // You can also use this notation (less usual, but useful in some cases).
  // It's more similar to Java's map.get(key).
  person1['city'] = 'Liverpool';
  console.log(person1['name'] + " lives in " + person1['city']);
  console.log(person2['name'] + " lives in " + person2['address']);

  // Another example
  const map = {}; // Empty object
  map.title = 'js examples';
  map.show = true;
  if (map.show) {
    console.log(map.title);
  }
}

/**
 * Example of how to convert from jQuery object to DOM object and viceversa
 */
function setupExampleFromJsToJquery() {

  $('.js-jquery button').click(function() {

    // Using jQuery initially
    const target_jq = $('.js-jquery .target'); // get element using jQuery
    console.log("jQuery found " + target_jq.length + " elements");
    let text = target_jq.text(); // get text using jQuery

    // Getting DOM object from jQuery object
    const target_js = target_jq[0];
    text += ' Added using DOM.';
    target_js.textContent = text; // set text using the DOM object

    // Obtain a jQuery object from the DOM object
    const target_jq2 = $(target_js);
    text += ' Added using jQuery.';
    target_jq2.text(text); // set text using jQuery

    // Note target_jq and target_jq2 are almost the same
  });
}

/**
 * Example of how to alter elements in different ways.
 */
function setupExampleModifyElements() {

  $('.modifications button').click(function() {

    $('.modifications img').attr('src', 'img/light-on.png');

    // Notice we can chain jquery methods to apply different changes
    $('.modifications input')
      .val('the light is on'.toUpperCase()) // don't use attr() for 'value' attribute
      .css( {color:'red', 'text-align': 'center'} ) // prefer addClass() to css()
      .addClass('modified'); // try toggleClass()
  });
}

/**
 * Example of how to create and add elements
 */
function setupExampleCreateAndAddElements() {

  $('.adding button').click(function() {

    const container = $('.adding .container');

    const paragraph = $('<p>');
    paragraph // notice we can chain methods here too
      .text("new paragraph")
      .addClass('highlighted');

    // We can append to the element we're preparing.
    // This time I inline the element creation.
    paragraph.append( $('<input>').val('with an input inside') );

    // And finally append the paragraph to some element already
    // in the page, or the elements we've created would not be visible.
    container.append(paragraph);


    // Bonus: we can also do it with plain JavaScript (but caution, it's dirty!)

    // We get the element with js
    const container_js = document.querySelector('.adding .container_js');
    // We create a string with the html we want to insert
    const html = '<p class="highlighted">' + 'another paragraph' +
      '<input value="with an input">' + '</p>';
    // And modify the innerHTML property of the container
    container_js.innerHTML += html;

    // Note: in jQuery we could do the same using the html() method
  });
}
