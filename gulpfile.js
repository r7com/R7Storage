var gulp  = require('gulp');
var karma = require('gulp-karma');

var GulpApp = {
  testFiles: [
    'src/*.js',
    'spec/*.js'

  test: function(action) {
    return gulp.src(GulpApp.testFiles).pipe(
      karma({
        configFile: 'karma.conf.js',
        action: action || "run"
      })
    );
  },

  default: function() {
    return GulpApp.test("watch");
  }
};

gulp.task('test', GulpApp.test);
gulp.task('default', GulpApp.default);
