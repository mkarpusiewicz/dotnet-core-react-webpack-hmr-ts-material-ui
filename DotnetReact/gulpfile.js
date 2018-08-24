/// <binding AfterBuild='build' Clean='clean' />

var gulp = require('gulp');

var paths = {
    node_modules: [
        'node_modules/react/umd/react.development.js',
        'node_modules/react-dom/umd/react-dom.development.js',
        'node_modules/@material-ui/core/umd/material-ui.development.js',
    ]
};

gulp.task('build', function () {
    gulp.src(paths.node_modules).pipe(gulp.dest('wwwroot/lib'))
});