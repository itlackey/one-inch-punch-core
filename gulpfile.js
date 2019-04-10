const {src,dest, series} = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const path = require('path');
const spawn = require('child_process').spawn;
const outputPath = 'dist';

function clean() {
  return spawn('rm', ['-rf', path.join(__dirname, outputPath)]);
}
function minify(){
    return src(path.join(outputPath, 'one-inch-punch.js'))
    .pipe(rename('one-inch-punch.min.js'))    
    .pipe(sourcemaps.init())
        .pipe(uglify())
        
        .pipe(sourcemaps.write('.'))
        .pipe(dest(outputPath));
}
function compile(cb) {    
    return src('src/**/*.js')
    .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        //.pipe(uglify())
        //.pipe(minify())
        .pipe(concat('one-inch-punch.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(outputPath));
}

exports.default =  series(clean, compile, minify);