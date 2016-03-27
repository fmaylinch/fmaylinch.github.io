# CSS Layouts test project

## How the project was configured

### Install node.js

* Install Node Version Manager `nvm`
* `nvm install 4.4.0` to download and install node.js 4.4.0
* `nvm alias default 4.4.0` to set that default node.js (maybe not necessary)

### Install Gulp

* `npm install gulp -g` to install Gulp globally

### Create this project folder and configure it

* `npm init` and accepted defaults hitting enter (creates `package.json`)
* `npm install gulp --save-dev` to install Gulp locally and update `package.json`
* `npm install gulp-autoprefixer --save-dev`
* `npm install browser-sync --save-dev`
* `npm install gulp-sass --save-dev`
* Create `gulpfile.js` to configure tasks
* You can run `gulp css` or `gulp watch`.

## Some links to check

* https://benfrain.com/breaking-up-with-sass-postcss/
* https://github.com/jonathantneal/precss
