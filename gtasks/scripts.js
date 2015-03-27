var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var paths = require('./paths');
var files = require('./files');

module.exports = function() {
  return gulp.src(paths.src.js + '/**/*.js')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(concat(files.custom.js))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.js));
};