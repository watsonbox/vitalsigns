var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserSync = require('browser-sync');

gulp.task('js', function(){
  browserify('./public/javascripts/src/app.jsx')
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/javascripts/build/'));
});

gulp.task('watch', function() {
  gulp.watch("public/javascripts/src/**/*.jsx", ["js", browserSync.reload])
})

gulp.task('browsersync', ['js'], function () {
  browserSync({
    proxy: "localhost:3000",
    notify: false,
    browser: ["google chrome"]
  });
});

gulp.task('default', ['browsersync', 'watch']);
