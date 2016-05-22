
// http://stackoverflow.com/a/15191130/1121497
function rotate(elem, start, end, duration, complete)
{
    $({deg: start}).animate({deg: end}, {
        duration: duration,
        complete: complete || $.noop,
        step: function(now, fx){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        },
    });
}

// https://gist.github.com/kerimdzhanov/7529623
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
