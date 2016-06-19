var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var shell = require('gulp-shell')


var paths = {
  sass: ['./scss/*.scss']
};

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['mysass']);
});

gulp.task('cm', shell.task([
  'sudo chmod 777 plugins/ -R',
  'sudo chmod 777 platforms/ -R',
]));

gulp.task('ip', shell.task([
  'sudo chmod 777 plugins/ -R',
  'sudo cordova plugin add com.ionic.keyboard',
  'sudo cordova plugin add https://github.com/apache/cordova-plugin-console',
  'sudo cordova plugin add org.pushandplay.cordova.apprate',
  //'sudo cordova plugin add https://github.com/apache/cordova-plugin-inappbrowser',
  'sudo cordova plugin add https://github.com/apache/cordova-plugin-network-information',
  'sudo cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git',
  'sudo cordova plugin add https://github.com/apache/cordova-plugin-splashscreen',
  'sudo cordova plugin add https://github.com/apache/cordova-plugin-statusbar',
  'sudo cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin',
  'sudo chmod 777 plugins/ -R'
]))

gulp.task('rp', shell.task([
  'sudo chmod 777 plugins/ -R',
  'sudo cordova plugin rm com.ionic.keyboard',
  'sudo cordova plugin rm cordova-plugin-console',
  'sudo cordova plugin rm cordova-plugin-inappbrowser',
  'sudo cordova plugin rm cordova-plugin-network-information',
  'sudo cordova plugin rm org.pushandplay.cordova.apprate',
  'sudo cordova plugin rm uk.co.whiteoctober.cordova.appversion',
  'sudo cordova plugin rm cordova-plugin-splashscreen',
  'sudo cordova plugin rm cordova-plugin-statusbar',
  'sudo cordova plugin rm nl.x-services.plugins.toast',
  'sudo chmod 777 plugins/ -R'
]))

gulp.task('default', ['mysass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});


gulp.task('mysass', function(done) {
  gulp.src('./scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('install-plugins', function() {
  console.log('INSTALL')
});



gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

