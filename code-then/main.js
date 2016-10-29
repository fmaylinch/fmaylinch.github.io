
$(function() {
  targetLinksToBlank();
  displayTyped();  
  setupLanguageDropdown();
  collapseContentDetails();
  setupContentButtons();
  setupListItemNumbering();
});

// Set target="_blank" to links (except those with "target-self" class)
function targetLinksToBlank() {
  $("a:not(.target-self)").attr("target", "_blank");
}

// Display dynamically typed message
function displayTyped() {
 
  $("#typed").typed({
    strings: ["^500 Get a job", "^500 Build your idea", "^500 Have fun", "^500 Anything."],
    typeSpeed: 40,
    cursorChar: '_'
  });
}

function setupLanguageDropdown() {
  
  var speed = 'fast';
  
  // Toggle dropdown
  $('#language-button').click(function(event) {
    event.preventDefault();
    $('#languages').slideToggle(speed);
  });
  
  // Current language just closes dropdown
  $('#current-language').click(function(event) {
    event.preventDefault();
    $('#languages').slideUp(speed);
  });
}

// Collapse contents and make each section clickable (for toggling it)
function collapseContentDetails() {
  
  $("ol ul").hide();
  
  $("ol > li").click(function() {
    $(this).find("ul").slideToggle();
  });
}

// Setup buttons for expanding and collapsing contents
function setupContentButtons() {
  
  $("#expand").click(function() {
    $("ol ul").slideDown();
  });

  $("#collapse").click(function() {
    $("ol ul").slideUp();
  });
}

// Sets <ol start="x"> so list numbering is continuous.
function setupListItemNumbering() {
  
  var start = 1;
  
  $(".section-title").each(function() {
    var ol = $(this).next();
    ol.attr('start', start);
    start += ol.children().length;
  });
}