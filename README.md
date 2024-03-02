# Ferran Maylinch

Currently, the `index.html` (and folders `assets` and `vite-public`) are generated  from `vite-ts-app`
by running `npm run build` and moving and resulting files in `dist` to this project root folder. 
You can do `mv dist/* .` (after removing the files moved that last time).

In case you need an http server to open `index.html`:
```bash
# npm install -g http-server
http-server
```

To do:
- Show how to load the Arkham Horror snippet.
- Adapt the code in `src/assets/js/code.js` to Typescript.
- To do that I need to adapt `CodeMirror` to Typescript (or. bypass the `CodeMirror` object)

The previous `index.html` was named to `index-old`.

And the previous `index.html` was renamed to `codethen.html`. That page
has some links to other files in this repo.
