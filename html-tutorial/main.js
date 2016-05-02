$(document).ready(function() {  
  
  // Fix HTML code snippets
  $('pre code.language-html').each(function(i, block) {
    var html = Prism.highlight(block.innerHTML, Prism.languages.html);
    $(block).html(html);
  });  

});
