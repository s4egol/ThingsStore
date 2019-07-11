﻿/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

/*
 Source https://www.typescriptlang.org/docs/handbook/asp-net-core.html
 */

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.map'],
};

gulp.task('clean', function () {
    return del(['wwwroot/src/**/*']);
});

gulp.task('default', function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/src'))
});