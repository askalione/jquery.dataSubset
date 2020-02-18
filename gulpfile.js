const { src, dest } = require('gulp');
const clean = require('gulp-clean-dir');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.default = function () {
    return src('src/*.js')
        .pipe(dest('dist'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(clean('dist'))
        .pipe(dest('dist'));
}