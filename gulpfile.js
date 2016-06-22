var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var exec = require('child_process').exec;
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var usemin = require('gulp-usemin');
var templateCache = require('gulp-angular-templatecache');
var gulpCopy = require('gulp-copy');


var paths = {
  sass: ['./scss/*.scss']
};

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('./www/templates/*.html', ['templates']);
});

gulp.task('unit-travis', shell.task('./node_modules/.bin/karma start travis.karma.conf.js') ); 
gulp.task('unit', shell.task('./node_modules/.bin/karma start karma.conf.js') ); 

// gulp.task('cm', function (cb) {
//   exec('ls | ls', function (err, stdout, stderr) {
//     console.log(stdout);
//     console.log(stderr);
//     cb(err);
//   });
// })

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
]));

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
]));

gulp.task('default', ['sass']);


gulp.task('sass', function(done) {
  gulp.src(['./scss/style.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('copyfonts', function() {
   gulp.src(['./www/lib/ionic/release/fonts/**/*.{ttf,woff,eof,svg}'])
   .pipe(gulp.dest('./www/dist/fonts'));
});

gulp.task('copyimg', function() {
   gulp.src(['./www/img/**/*'])
   .pipe(gulp.dest('./www/dist/img'));
});

gulp.task('templates', function () {
  return gulp.src('./www/templates/**/*.html')
    .pipe(templateCache({module:'starter'}))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('usemin',['copyfonts', 'copyimg', 'templates'], function () {
  return gulp.src('./www/index.html')
      .pipe(usemin({
        // js: [concat('js/all.js'), ngAnnotate(), uglify()],
        js: [concat('js/all.js')],
        jsLibs: [concat('js/libs.js')],
        css: [concat('css/style.css')],
        
      }))
      .pipe(gulp.dest('./www/dist/'));
});

gulp.task('build-android', ['usemin'], shell.task('sudo ionic build android') );

