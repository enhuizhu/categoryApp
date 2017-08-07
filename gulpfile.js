const gulp = require('gulp');
const browserify = require('browserify');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');

gulp.task('buildCss', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));    
});

gulp.task('buildJs', () => {
   return browserify('./src/main.jsx', {debug: true})
        .transform(babelify)
        .bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
    gulp.watch(['./src/main.jsx', './src/**/*.jsx', './src/**/*.js'], ['buildJs']);
    gulp.watch(['./src/scss/main.scss'], ['buildCss']);
});

gulp.task('default', ['build']);