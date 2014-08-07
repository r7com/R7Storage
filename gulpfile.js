var gulp   = require('gulp'),
    karma  = require('gulp-karma'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var GulpApp = {
  config: {
    testFiles: [
      'src/r7storage.js',
      'spec/*.js'
    ],

    action: "run"
  },

  test: function() {
    return gulp.src(GulpApp.config.testFiles)
      .pipe(
        karma({
          configFile: 'karma.conf.js',
          action: GulpApp.config.action
        })
      );
  },

  default: function() {
    GulpApp.config.action = "watch";
    return GulpApp.test();
  },

  build: function() {
    return gulp.src(GulpApp.config.testFiles[0])
     .pipe(uglify())
     .pipe(rename({ suffix: '.min' }))
     .pipe(gulp.dest('src/'));
  }
};

gulp.task('test', GulpApp.test);
gulp.task('default', GulpApp.default);
gulp.task('compress', GulpApp.build);
gulp.task('build', ['test', 'compress']);