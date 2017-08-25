
// Classes example

var classesSection = getSection(".classes");
setupOnClick(classesSection, function() {

  const rob = new Robot("Rob");
  rob.move(5);
  const result = "robot: " + rob;

  displayResult(classesSection, result);
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
