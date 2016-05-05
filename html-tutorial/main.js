$(document).ready(function() {  
  
  function getLang(elem) {
    
    if (elem.hasClass("language-html")) return Prism.languages.html;
    if (elem.hasClass("language-css")) return Prism.languages.css;
    
    throw "Unexpected language or missing class";
  }
  
  // Adds data-line-offset (http://prismjs.com/plugins/line-highlight/)
  // according to data-start (http://prismjs.com/plugins/line-numbers/)
  function setupLineOffset(elem) {
      
    if (elem.attr("data-start")) {
      var start = elem.attr("data-start");
      elem.attr("data-line-offset", start-1);
    }

  }
  
  // Note: currently html can't contain <body> ?
  
  $('pre code.prism').each(function() {

    var parent = $(this).parent();
    setupLineOffset(parent);
    
    var lang = getLang($(this));
    
    var html = Prism.highlight($(this).html(), lang);
    $(this).html(html);
    
  });  
  
});
