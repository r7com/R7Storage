var gulp   = require('gulp'),
    karma  = require('gulp-karma'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var GulpApp = {
  testFiles: [
    'src/r7storage.js',
    'spec/*.js'
  ],

  action: "run",

  test: function() {
    return gulp.src(GulpApp.testFiles).pipe(
      karma({
        configFile: 'karma.conf.js',
        action: GulpApp.action
      })
    );
  },

  default: function() {
    GulpApp.action = "watch";
    return GulpApp.test();
  },

  build: function() {
    return gulp.src(GulpApp.testFiles[0])
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('src/'));
  }
};

gulp.task('test', GulpApp.test);
gulp.task('default', GulpApp.default);
gulp.task('build', ['test'], GulpApp.build);