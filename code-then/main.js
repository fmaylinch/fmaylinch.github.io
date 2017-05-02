
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

  $('header > div').fadeIn(2000);

  $("#typed").typed({
    strings: ["^2500get a job", "^500build your idea", "^500have fun", "^500do anything"],
    typeSpeed: 40,
    cursorChar: ''
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

  $("ol > li > span").click(function() {
    $("#collapse").show();
    var li = $(this).parent();
    li.find('i')
      .toggleClass('fa-caret-down')
      .toggleClass('fa-caret-up');
    li.find("ul").slideToggle();
  });

  $("ol > li").each(function() {
    $(this).prepend('<i class="fa fa-caret-down faint" aria-hidden="true"></i>');
  });
}

// Setup buttons for expanding and collapsing contents
function setupContentButtons() {

  $("#expand").click(function() {
    $("ol > li > i").removeClass("fa-caret-down").addClass("fa-caret-up");
    $("ol ul").slideDown();
    $("#collapse").show();
  });

  $("#collapse").click(function() {
    $("ol > li > i").removeClass("fa-caret-up").addClass("fa-caret-down");
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
