var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('js', function(){
  browserify('./public/javascripts/src/app.jsx')
    .transform(babelify)
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/javascripts/build/'));
});

gulp.task('watch', function() {
    gulp.watch("public/javascripts/src/**/*.jsx", ["js"])
})

gulp.task('default', ['js', 'watch']);
