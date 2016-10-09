
$(function() {
  displayTyped();  
  collapseContentDetails();
  setupContentButtons();
});


function displayTyped() {
 
  $("#typed").typed({
    strings: ["^500 Get a job", "^500 Build your idea", "^500 Have fun", "^500 Anything."],
    typeSpeed: 40,
    cursorChar: '_'
  });
}

function collapseContentDetails() {
  
  $("ol ul").hide();
  
  $("ol > li").click(function() {
    $(this).find("ul").slideToggle();
  });
}

function setupContentButtons() {
  
  $("#expand").click(function() {
    $("ol ul").slideDown();
  });

  $("#collapse").click(function() {
    $("ol ul").slideUp();
  });
}