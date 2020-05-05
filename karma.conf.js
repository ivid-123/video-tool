// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/VideoTool'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },customLaunchers: {
      MyHeadlessChrome: {
          base: 'ChromeHeadless',
          flags: [
            '--headless', 
            '--no-sandbox',
            '--disable-translate', 
            '--disable-extensions', '--disable-web-security', '--remote-debugging-port=9223']
      }
    },
    reporters: ['progress', 'kjhtml'],
    port: 4200,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['MyHeadlessChrome'],
    singleRun: true,
    restartOnFileChange: true,
    captureTimeout: 120000
  });
};