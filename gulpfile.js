//
// gulpfile.js
// Gulp for AlaX
// Дата: 17.04.2014
// (c) 2015, Andrey Gershun
//

var gulp = require('gulp');
module.exports = gulp;
var concat = require('gulp-concat-sourcemap');
var shell = require('gulp-shell');

gulp.task('js-merge', function () {
  return gulp.src([
    './src/05copyright.js', 
  	'./src/10start.js', 
  	'./src/15utility.js', 
    './src/97saveas.js',
    './src/FileSaver.js',
   	'./src/98finish.js',
    ])
    .pipe(concat('alax.js'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('uglify', function () {
  return gulp.src('dist/alax.js', {read: false})
    .pipe(shell([
      'uglifyjs dist/alax.js -o dist/alax.min.js',
    ]));
});


gulp.task('copy-dist-org', function(){
  gulp.src(['./dist/alax.min.js'])
    .pipe(gulp.dest('./console/'));
});

// Additional task to update alasql.org/console directory
gulp.task('copy-console-org', function(){
  gulp.src(['./dist/alax.min.js'])
    .pipe(gulp.dest('../alasql-org/console/'));
});

// Главная задача
gulp.task('default', ['js-merge' /*, 'jison-compile', 'jison-lex-compile' */], function(){
  gulp.watch('./src/*.js',function(){ gulp.run('js-merge'); });
  gulp.watch('./dist/alax.js',function(){ gulp.run('uglify'); });
  gulp.watch('./dist/alasql.min.js',function(){ 
    gulp.run('copy-dist-org');
    gulp.run('copy-console-org');
  });
});
