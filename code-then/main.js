
$(function() {
  displayTyped();  
  collapseContentDetails();
  setupContentButtons();
  setupListItemNumbering();
});

// Display dynamically typed message
function displayTyped() {
 
  $("#typed").typed({
    strings: ["^500 Get a job", "^500 Build your idea", "^500 Have fun", "^500 Anything."],
    typeSpeed: 40,
    cursorChar: '_'
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