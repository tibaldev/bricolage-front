var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function () {
  return gulp.src(sourcefile)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat(files.custom.css))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css));
}