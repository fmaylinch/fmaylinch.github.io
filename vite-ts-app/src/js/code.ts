import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import { tags } from '@lezer/highlight';
import { RemoteStorage } from 'remote-storage'
import * as babel from '@babel/standalone'
import React from 'react'
import {createRoot, Root} from 'react-dom/client';

let reactRoot: Root; // initialized later

// I copied the source code here, so I can tweak it if necessary
//import { createTheme } from 'thememirror';
import createTheme from './create-theme.ts';

let myCodeMirror : EditorView;
let errors : HTMLElement;
const CodeKey = "code";

function initCodeProcessing() {
    errors = document.getElementById("errors")!;

    /** Prepare myCodeMirror  */
    const textArea = document.querySelector<HTMLElement>("#message")!;

    const myTheme = createTheme({
        variant: 'dark',
        settings: {
            background: '#292A2B',
            foreground: '#d3d3d3',
            fontSize: "14px",
            fontFamily: "'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas, Courier New, monospace",
            caret: '#67ddee',
            selection: 'rgba(166,146,217,0.37)',
            gutterBackground: '#292a2b',
            gutterForeground: 'rgba(138,138,138,0.47)',
            lineHighlight: 'rgba(99, 123, 156, 0.1)',
        },
        styles: [
            { tag: tags.comment, color: '#737888', fontStyle: "italic" },
            { tag: tags.string, color: '#12b9a1' },
            { tag: tags.docString, color: '#FFB86C' },
            { tag: tags.definitionOperator, color: '#d3d3d3' },
            { tag: tags.operator, color: '#67ddee' },
            { tag: tags.paren, color: '#adadad' },
            { tag: tags.squareBracket, color: '#d3d3d3' },
            { tag: tags.meta, color: '#b084eb' },
            { tag: tags.number, color: '#6cceea' },
            { tag: tags.null, color: '#b6204d' },
            { tag: tags.keyword, color: 'rgb(203, 90, 161)' },
            { tag: tags.definitionKeyword, color: 'rgb(203, 90, 161)' },
            { tag: tags.variableName, color: 'rgb(147, 130, 192)' },
            { tag: tags.function(tags.variableName), color: '#ffb86c' },
            { tag: tags.typeName, color: '#ff9ac1' },
        ],
    });

    myCodeMirror = new EditorView({
        doc: "hello",
        state: EditorState.create({
            extensions: [
                basicSetup,
                javascript({jsx: true}),
                myTheme,
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
        fetchCode: "https://gist.githubusercontent.com/fmaylinch/298018ad34503e15fc2c1ebd6fba7cf9/raw",
        runCode: 'false'
    });
}

function executeCode() {
    errors.innerText = "";
    const code = myCodeMirror.state.doc.toString();
    window.localStorage.setItem(CodeKey, code);
    try {
        const codeAsFunction = `(codeMirrorEditorView, RemoteStorage, React, reactRoot) => {
           ${code}
        }`;
        const presets = ['react'];
        const babelResult = babel.transform(codeAsFunction, { presets });
        const func = eval(babelResult?.code!)

        if (!reactRoot) { // React complains if it's created again
            reactRoot = createRoot(document.getElementById("main")!);
        }

        func(myCodeMirror, RemoteStorage, React, reactRoot);
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
