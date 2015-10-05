// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
require('require-dir')('build/tasks');
var gulp = require('gulp');

gulp.task('default', ['watch']);
