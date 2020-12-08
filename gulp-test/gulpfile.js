const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser')
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const {src , series, parallel, dest, watch} = require('gulp');

const jsPath = 'src/assets/js/**/*.js';
const cssPate ='src/assets/css/**/*.css';

function copyHtml(){
    return src('src/*.html').pipe(gulp.dest('dist'))
}


function imgTask(){
    return src ('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'))
}

function jsTask() {
    return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/js'))
}

function cssTask(){
    return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'))
}

function watchTask(){
    watch([cssPate, jsPath], {interval: 1000}, parallel(cssTask, jsTask))
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml;
exports.default = parallel(copyHtml, imgTask);
exports.default = series(parallel(copyHtml, imgTask, jsTask, cssTask, watchTask))