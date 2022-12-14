let updatedData = false;
let myCodeMirror;
const errors = document.getElementById("errors");
const CodeKey = "code";

/** Prepare myCodeMirror when page is loaded */
window.addEventListener('load', (event) => {
    const textArea = document.querySelector("#message");
    myCodeMirror = CodeMirror.fromTextArea(textArea, {
        mode:  "javascript",
        theme: "panda-syntax",
    });
    let code = window.localStorage.getItem(CodeKey);
    if (code) {
      console.log("Found code from a previous session");
    } else {
      console.log("Initializing code");
      code = getFunctionBody(updateData);
    }
    myCodeMirror.setValue(code);
});

/** Execute code when run button is clicked */
document.querySelector(".button.run").addEventListener("click", (e) => {
    e.preventDefault();
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

/** Reset code when reset button is clicked */
document.querySelector(".button.reset").addEventListener("click", (e) => {
  e.preventDefault();
  myCodeMirror.setValue(getFunctionBody(updateData));
});

/**
 * This function is not called directly.
 * We copy the body to {@link #myCodeMirror},
 * and execute the code in {@link #executeCode}.
 */
function updateData(document) {
    // You can modify this code and run it :)
    fade("#title", "Practice coding")
    const action = random(["try", "run", "execute", "modify"])
    const js = link("JavaScript", "https://developer.mozilla.org/docs/Web/JavaScript")
    fade("#text1", "You can " + action  + " the " + js + " code below")
    const functions = join(["fade", "join", "link", "random"]);
    fade("#text2", "Use functions like " + functions)
    fade(".button.run", "Run it again")

    // Updates a page element, by its CSS selector
    function set(selector, value) {
      let element = document.querySelector(selector)
      element.innerHTML = value
    }

    // It's like set(), but uses jQuery for a fade-in-out effect
    function fade(selector, value) {
      let elem = $(selector)
      elem.fadeOut('slow', () => {
        elem.html(value)
        elem.fadeIn('slow')
      });
    }

    // Joins the values with commas and "and"
    function join(values) {
      if (!Array.isArray(values)) {
        return values
      }
      return values.length === 1
        ? values[0]
        : values.slice(0, values.length-1).join(", ")
          + " and " + values[values.length-1]
    }

    // Builds an HTML link
    function link(text, url) {
      return `<a target="_blank" href="${url}">${text}</a>`
    }

    // Returns a random number between 0 and n-1.
    // If n is an array, returns a random element of n.
    function random(n) {
      if (Array.isArray(n)) {
        return n[random(n.length)]
      }
      return Math.floor(Math.random() * n)
    }

    // Loads code from url and replaces current code in editor
    function fetchCode(url) {
      fetch(url)
        .then(resp => resp.text())
        .then(code => {
          codeMirror.setValue(code)
        })
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
    document.querySelector(".button.reset").style.display = "block";
    errors.innerText = "";
    const code = myCodeMirror.getValue();
    window.localStorage.setItem(CodeKey, code);
    const codeAsFunction = "(document, window, codeMirror) => {\n" + code + "\n}";
    try {
        const func = eval(codeAsFunction);
        func(document, window, myCodeMirror);
    } catch (e) {
        console.log(e);
        errors.innerText = e;
    }
}

function shrinkIntroSection() {
    $('#intro').animate({'min-height': '0'}, 1500);
}
