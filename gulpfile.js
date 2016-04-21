'use strict';

var fs = require('fs');
var gulp = require('gulp');
var s3 = require("gulp-s3");


// Gulp task definitions

gulp.task('deployToS3', deployToS3);


// Support functions

function deployToS3() {
   var aws = JSON.parse(fs.readFileSync('./aws.json'));
   gulp.src('./www/**')
      .pipe(s3(aws));

}
