var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('../paths.js');

gulp.task('build-sass', function () {
  return gulp.src(['./src/main.scss'])
    .pipe(sass({importer: importer}).on('error', sass.logError))
    .pipe(gulp.dest(paths.output))
});

var System = require('systemjs');
var config = require('../../config.js');
var path = require('path');
var appRoot = require('app-root-path');
/**
 * Transforms jspm paths
 *
 * jspm paths must be prefixed by 'jspm:'
 * @param url
 * @param prev
 * @param done
 */
function importer(url, prev, done) {
  if (url.slice(0,5) === 'jspm:') {
    // Only transform strings prefixed with '~'
    System.normalize(url.slice(5)).then(function (normalized) {
      var filePath = normalized.replace(':', '/').replace('.js', '.scss').split('jspm_packages')[1];
      done({file: path.join(appRoot.path, 'jspm_packages', filePath)});
    });
  } else {
    done({file: url});
  }
}
