/**
 * @file
 * Gulp pipe.
 */

'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const rename = require("gulp-rename");

// SASS to CSS
gulp.task('sass', function () {
  return gulp.src('./scss/styles.scss', {nodir: true})
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./_maps'))
    .pipe(gulp.dest('./css/'));
});

// Minify JavaScript file(s)
gulp.task('scripts', function() {
  return gulp.src('./js/script.js')
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./js/'))
});

// Watch
gulp.task('watch', function () {
  gulp.watch('./scss/**', gulp.series('sass'));
  gulp.watch('./js/script.js', gulp.series('scripts'));
});


gulp.task('default', gulp.parallel( 'sass', 'scripts', 'watch'));
