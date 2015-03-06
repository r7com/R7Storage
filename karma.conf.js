module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    exclude: [],
    files: ['./src/*.js', './spec/*.js'],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
