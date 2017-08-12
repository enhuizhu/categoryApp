const gulp = require('gulp');
const browserify = require('browserify');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const dest = './dist/';

gulp.task('buildCss', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest))
        .pipe(cleanCSS())
        .pipe(gulp.dest(dest));    
});

gulp.task('buildJs', () => {
   return browserify('./src/index.js', {debug: true})
        .transform(babelify)
        // .plugin("minifyify", {map: false, uglify: {
        //     compress: {
        //         drop_console: true,
        //         dead_code: true,
        //         conditionals: true,
        //         unused: true,
        //         if_return: true,
        //         global_defs: {
        //             DEBUG: false
        //         }
        //     },
        //     mangle: true,
        //     "screw-ie8": true
        // }})
        .bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(dest));
});

gulp.task('watch', () => {
    gulp.watch(['./src/index.js', './src/**/*.js', './src/**/**/*.js'], ['buildJs']);
    gulp.watch(['./src/scss/*.scss', './src/components/**/*.scss'], ['buildCss']);
});

gulp.task('default', ['buildJs', 'buildCss']);