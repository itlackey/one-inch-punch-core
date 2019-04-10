const {src,dest} = require('gulp');
function compile(cb) {
    console.log('compile');
    return src('src/**/*.*').pipe(dest('sandbox'));
}

exports.default = compile;