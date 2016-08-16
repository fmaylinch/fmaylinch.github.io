"use strict";

/**
  Code made by me to init prismjs.
  The prism.js file contains these plugins:
    Line Highlight, Line Numbers, Normalize Whitespace
*/

$(document).ready(function() {  
  
  // Note: currently html can't contain <body> ?
  
  $('pre code.prism').each(function() {

    var parent = $(this).parent();
    setupLineOffset(parent);
    
    var lang = getLang($(this));
    
    var html = Prism.highlight($(this).html(), lang);
    $(this).html(html);
    
  });  
  
});


var classToLang = {
  "language-html" : Prism.languages.html,
  "language-css" : Prism.languages.css,
  "language-java" : Prism.languages.java,
  "language-javascript" : Prism.languages.javascript
};

/** Gets Prism language for the element, depending on the language-xxx class */
function getLang(elem) {
  
  for (var className in classToLang) {
    if (elem.hasClass(className)) return classToLang[className];
  }

  throw "Unexpected language or missing class for this piece of code: " + elem.text();
}

/**
 * Adds data-line-offset (http://prismjs.com/plugins/line-highlight/)
 * according to data-start (http://prismjs.com/plugins/line-numbers/)
 */
function setupLineOffset(elem) {

  if (elem.attr("data-start")) {
    var start = elem.attr("data-start");
    elem.attr("data-line-offset", start-1);
  }

}
