let updatedData = false;
let myCodeMirror;
let errors;
const CodeKey = "code";

function initCodeProcessing() {
    errors = document.getElementById("errors");

    /** Prepare myCodeMirror  */
    const textArea = document.querySelector("#message");
    myCodeMirror = CodeMirror.fromTextArea(textArea, {
        mode: "javascript",
        theme: "panda-syntax",
    });
    myCodeMirror.setSize(null, 400);

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.fetchCode) {
        loadCodeFromParams(params);
    } else {
        loadCodeFromStorage();
    }

    /** Execute code when run button is clicked */
    document.querySelector(".button.run").addEventListener("click", (e) => {
        e.preventDefault();
        executeCode();
    });

    /** Reset code when reset button is clicked */
    document.querySelector(".button.reset").addEventListener("click", (e) => {
        e.preventDefault();
        myCodeMirror.setValue(getFunctionBody(updateData));
    });
}

function loadCodeFromParams(params) {
  console.log('Loading code from: ' + params.fetchCode);
  fetch(params.fetchCode)
    .then(resp => resp.text())
    .then(code => {
      myCodeMirror.setValue(code);
      if (params.runCode === 'true') {
        executeCode();
        shrinkIntroSection();
      }
    })
    .catch(e => {
      myCodeMirror.setValue('// Could not load: ' + params.fetchCode + '\n// Error: ' + e);
    });
}

function loadCodeFromStorage() {
  let code = window.localStorage.getItem(CodeKey);
  if (code) {
    console.log('Found code from a previous session');
  } else {
    console.log('Initializing code');
    code = getFunctionBody(updateData);
  }
  myCodeMirror.setValue(code);
}

/**
 * This function is not called directly.
 * We copy the body to {@link #myCodeMirror},
 * and execute the code in {@link #executeCode}.
 */
function updateData(document) {
    // You can modify this code and run it :)
    $('#main-button').click(); // click the "MAIN" button (scrolls up)

    setTimeout(() => { // run this after 1 second (to give time to scrolling)
        fade("#title", "Practice coding")
        const action = random(["try", "run", "execute", "modify"])
        const js = link("JavaScript", "https://developer.mozilla.org/docs/Web/JavaScript")
        fade("#text1", "You can " + action  + " the " + js + " code below")
        const functions = join(["fade", "join", "link", "random"]);
        fade("#text2", "Use functions like " + functions)
        fade(".button.run", "Run it again")

        $('#main-section').animate({'min-height': '0'}, 1500); // slowly shrink main section
    }, 1000);
    
    // Updates a page element, by its CSS selector
    function set(selector, value) {
      let element = document.querySelector(selector)
      element.innerHTML = value
    }

    // It's like set(), but uses jQuery for a fade-in-out effect
    function fade(selector, value) {
      let elem = $(selector)
      elem.fadeOut('slow', () => {
        elem.html(value).fadeIn('slow')
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
    console.log("scrollTop", scrollTop);
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
    const codeAsFunction = "(codeMirror) => {\n" + code + "\n}";
    try {
        const func = eval(codeAsFunction);
        func(myCodeMirror);
    } catch (e) {
        console.log(e);
        errors.innerText = e;
    }
}

function shrinkIntroSection() {
    $('#intro').animate({'min-height': '0'}, 1500);
}

export { initCodeProcessing }
