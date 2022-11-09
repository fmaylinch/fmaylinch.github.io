let scrolledToIntro = false;
let myCodeMirror;

/** Prepare myCodeMirror when page is loaded */
window.addEventListener('load', (event) => {
    const textArea = document.querySelector("#message");
    myCodeMirror = CodeMirror.fromTextArea(textArea, {
        mode:  "javascript",
        theme: "ambiance",
    });
    myCodeMirror.setValue(getFunctionBody(updateData));
});

/** This function is called, we just write the body to myCodeMirror */
function updateData(document) {
    // Data to display above
    let music = link("write songs", "https://soundcloud.com/ferran-maylinch");
    let youtuber = link("famous Youtuber", "https://www.youtube.com/user/ferranmaylinch");
    update("#name", [ "May" ]);
    update("#activities", [ "read", "workout", music ]);
    update("#job", [ "want to be a " + youtuber ]);

    // Updates an element of the page, by its CSS selector
    function update(selector, values) {
        let value = values.length == 1
          ? values[0]
          : values.slice(0, values.length-1).join(", ") +
          " and " + values[values.length-1];
        document.querySelector(selector).innerHTML = value;
    }

    // Builds an HTML link
    function link(text, url) {
        return '<a target="_blank" href="' + url + '">' + text + '</a>';
    }
}

/** Get function body as string, without indentation */
function getFunctionBody(f) {
    return f.toString()
      // take function body - https://stackoverflow.com/a/14886101/1121497
      .match(/function[^{]+\{([\s\S]*)\}$/)[1]
      // remove indentation
      .split('\n').map(line => line.substring(4)).join('\n')
      .trim();
}

/** Execute code when button is clicked */
document.querySelector(".button.submit").addEventListener("click", (e) => {
    e.preventDefault();    //stop form from submitting
    if (!scrolledToIntro) {
        const $sidebar = $('#sidebar');
        const $sidebar_a = $sidebar.find('a');
        $sidebar_a[0].click();
        scrolledToIntro = true;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const timeout = scrollTop === 0 ? 0 : 1000;
        setTimeout(applyUpdates, timeout);
        // shrink intro section
        setTimeout( () => {
            $( "#intro" ).animate({'min-height': '0'}, 1500);
        }, 2000);
    } else {
        applyUpdates();
    }
});

function applyUpdates() {
    const code = myCodeMirror.getValue();
    const funcString = "(document) => { " + code + " }";
    const func = eval(funcString);
    func(document);
}
