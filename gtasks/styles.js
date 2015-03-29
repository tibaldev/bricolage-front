var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var bowerfiles = require('main-bower-files');

var paths = require('./paths');
var files = require('./files');

module.exports = function () {
  
  // custom
  gulp.src(paths.src.css + '/*.css')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat(files.custom.css))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css));

  // lib
  var sourcefiles = bowerfiles('**/*.css');
  sourcefiles.push(paths.src.csslib + '/*.css')
  gulp.src(sourcefiles)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat(files.lib.css))
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css));
}