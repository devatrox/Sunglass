var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    header = require('gulp-header');

var bwr = require('./bower.json');

var banner = [
  '/*!',
  ' * <%= bwr.name %> - <%= bwr.description %>',
  ' * v<%= bwr.version %>',
  ' * <%= bwr.homepage %>',
  ' */',
  '', ''].join('\n');

gulp.task('clean', function() {
  gulp.src('.', { read: false })
    .pipe(clean());
});

gulp.task('concat', function() {
  gulp.src(['src/_defaults.scss', 'src/**/*.scss'])
    .pipe(concat('_sunglass.scss'))
    .pipe(header(banner, { bwr : bwr } ))
    .pipe(gulp.dest('.'))
    .pipe(notify({ message: 'Concenated files into _sunglass.scss' }));
});

gulp.task('compile', function() {
  gulp.src('**/*.scss', { cwd: 'tests' })
    .pipe(sass({ cacheLocation: 'tests/.sass-cache', quiet: true, debugInfo: true }))
    // .pipe(header('/* Test */\n'))
    .pipe(gulp.dest('tests/'));
});

gulp.task('default', function() {
  gulp.watch(['src/**/*.scss', 'tests/**/*.scss'], function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('concat');
    gulp.run('compile');
  });
});


