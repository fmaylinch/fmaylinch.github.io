import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
// https://github.com/craftzdog/cm6-themes
import { solarizedDark } from 'cm6-theme-solarized-dark'
//import { materialDark } from 'cm6-theme-material-dark'; --> can't select text
//import { nord } from 'cm6-theme-nord';

let myCodeMirror : EditorView;
let errors : HTMLElement;
const CodeKey = "code";

function initCodeProcessing() {
    errors = document.getElementById("errors")!;

    /** Prepare myCodeMirror  */
    const textArea = document.querySelector<HTMLElement>("#message")!;

    myCodeMirror = new EditorView({
        doc: "hello",
        state: EditorState.create({
            extensions: [
                basicSetup,
                javascript(),
                solarizedDark
            ]
        }),
        parent: textArea,
    })

    const urlSearchParams = new URLSearchParams(window.location.search);
    const entries = [...urlSearchParams.entries()];
    const params : LaunchParams = {
        fetchCode: entries.find(entry => entry[0] == "fetchCode")?.[1] || "",
        runCode: entries.find(entry => entry[0] == "runCode")?.[1] || "",
    };
    if (params.fetchCode) {
        loadCodeFromParams(params);
    } else {
        loadCodeFromStorage();
    }

    /** Execute code when run button is clicked */
    document.querySelector(".button.run")!.addEventListener("click", (e) => {
        e.preventDefault();
        executeCode();
    });

    /** Reset code when reset button is clicked */
    document.querySelector(".button.reset")!.addEventListener("click", (e) => {
        e.preventDefault();
        resetCode();
    });
}

function setCode(code: string) {
    myCodeMirror.dispatch({
        changes: { from: 0, to: myCodeMirror.state.doc.length, insert: code },
    });
}

interface LaunchParams {
    fetchCode: string,
    runCode: string
}

function loadCodeFromParams(params: LaunchParams) {
  console.log('Loading code from: ' + params.fetchCode);
  fetch(params.fetchCode)
    .then(resp => resp.text())
    .then(code => {
      setCode(code);
      if (params.runCode === 'true') {
        executeCode();
        shrinkIntroSection();
      }
    })
    .catch(e => {
      setCode('// Could not load: ' + params.fetchCode + '\n// Error: ' + e);
    });
}

function loadCodeFromStorage() {
  // TODO: use https://github.com/FrigadeHQ/remote-storage
  let code = window.localStorage.getItem(CodeKey);
  if (code) {
    console.log('Found code from a previous session');
    setCode(code);
  } else {
    console.log('Initializing code');
    resetCode();
  }
}

/**
 * Now we can't do: myCodeMirror.setValue(getFunctionBody(updateData));
 * Because the code is minimised by vite.
 */
function resetCode() {
    loadCodeFromParams({
        fetchCode: "https://gist.githubusercontent.com/fmaylinch/03145a94a4a9e044f6f6e8888f2c9662/raw",
        runCode: 'false'
    });
}

function executeCode() {
    document.querySelector<HTMLElement>(".button.reset")!.style.display = "block";
    errors.innerText = "";
    const code = myCodeMirror.state.doc.toString();
    window.localStorage.setItem(CodeKey, code);
    const codeAsFunction = "(codeMirrorEditorView) => {\n" + code + "\n}";
    try {
        const func = eval(codeAsFunction);
        func(myCodeMirror);
    } catch (e) {
        console.log(e);
        errors.innerText = "" + e;
    }
}

function shrinkIntroSection() {
    // TODO: use jQuery from Typescript?
    eval(`$('#intro').animate({'min-height': '0'}, 1500)`)
}

export { initCodeProcessing }
