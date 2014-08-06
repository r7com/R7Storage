var gulp  = require('gulp');
var karma = require('gulp-karma');
var compressor = require('gulp-compressor');

var GulpApp = {
  testFiles: [
    'src/*.js',
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
  }
};

gulp.task('test', GulpApp.test);
gulp.task('default', GulpApp.default);