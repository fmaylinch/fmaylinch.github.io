
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Processes CSS files with Autoprefixer
gulp.task('css', function () {

	return gulp.src('css/processed/*.scss')

		.pipe(autoprefixer({
			//browsers: ['last 2 versions']
		}))

		.pipe(sass().on('error', sass.logError))

		.pipe(gulp.dest('css/generated'));
});

// Starts a local server and opens the web page.
// Any change in CSS or HTML files reloads the browser.
gulp.task('watch', function() {

 	browserSync.init({
        server: "./"
    });

    // Watch .css files
    gulp.watch('css/processed/*.scss', ['css', browserSync.reload]);

 	// Watch .html files
    gulp.watch("*.html", [browserSync.reload]);
});

gulp.task('default', ['watch']);
