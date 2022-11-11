let updatedData = false;
let myCodeMirror;
const errors = document.getElementById("errors");

/** Prepare myCodeMirror when page is loaded */
window.addEventListener('load', (event) => {
    const textArea = document.querySelector("#message");
    myCodeMirror = CodeMirror.fromTextArea(textArea, {
        mode:  "javascript",
        theme: "panda-syntax",
    });
    myCodeMirror.setValue(getFunctionBody(updateData));
});

/** Execute code when button is clicked */
document.querySelector(".button.submit").addEventListener("click", (e) => {
    e.preventDefault();    //stop form from submitting
    if (!updatedData) {
        updatedData = true;
        scrollToTopThen(() => {
            executeCode()
            setTimeout(shrinkIntroSection, 1000);
        });
    } else {
        executeCode();
    }
});

/**
 * This function is not called directly.
 * We copy the body to {@link #myCodeMirror},
 * and execute the code in {@link #executeCode}.
 */
function updateData(document) {
    // You can modify this code :)
    let music = link("write songs", "https://soundcloud.com/ferran-maylinch");
    let youtuber = link("famous Youtuber", "https://www.youtube.com/user/ferranmaylinch");
    fade("#name", ["May"]);
    set("#like", ["read", "workout", music]);
    set("#now", ["wanna be a " + youtuber]);

    // Updates a page element, by its CSS selector
    function set(selector, values) {
      let element = document.querySelector(selector);
      element.innerHTML = join(values);
    }

    // It's like set(), but uses jQuery for a fade-in-out effect
    function fade(selector, values) {
        let elem = $(selector);
        elem.fadeOut('slow', () => {
            elem.html(join(values));
            elem.fadeIn('slow');
        });
    }

    // Joins the values with commas and "and"
    function join(values) {
      return values.length === 1
        ? values[0]
        : values.slice(0, values.length-1).join(", ")
          + " and " + values[values.length-1];
    }

    // Builds an HTML link
    function link(text, url) {
      return `<a target="_blank" href="${url}">${text}</a>`;
    }
}

/** Get function body as string, without indentation */
function getFunctionBody(f) {
    return f.toString(2)
      // take function body - https://stackoverflow.com/a/14886101/1121497
      .match(/function[^{]+\{([\s\S]*)\}$/)[1]
      // remove indentation
      .split('\n').map(line => line.substring(4)).join('\n')
      .trim();
}

function scrollToTopThen(f) {
    // https://stackoverflow.com/a/28488360/1121497
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    errors.innerText = scrollTop;
    if (scrollTop < 70) {
        f();
    } else {
        // scroll to intro section and delay updates
        const introSectionLink = $('#sidebar a')[0];
        introSectionLink.click();
        setTimeout(f, 1250);
    }
}

function executeCode() {
    //errors.innerText = "";
    const code = myCodeMirror.getValue();
    const codeAsFunction = "(document, window) => { " + code + " }";
    try {
        const func = eval(codeAsFunction);
        func(document, window);
    } catch (e) {
        console.log(e);
        errors.innerText = e;
    }
}

function shrinkIntroSection() {
    $('#intro').animate({'min-height': '0'}, 1500);
}
