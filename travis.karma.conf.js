module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
        'www/lib/ionic/release/js/ionic.bundle.min.js',
        'www/lib/angular-translate/angular-translate.min.js',
        'www/lib/ionic-material/dist/ionic.material.min.js',
        'www/lib/angular-cache/dist/angular-cache.min.js',
        'www/lib/ion-gallery/dist/ion-gallery.js',
        'www/lib/satellizer/satellizer.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'www/js/*.js',
        'www/js/**/*.js',
        'unit_tests/*.test.js',
        'unit_tests/**/*.test.js'
    ],
    exclude: [
    ],

    preprocessors: {
        'www/js/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
        reporters: [{type: 'lcov'}]
    }, 

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['chrome_without_security'],
	customLaunchers: {
	  chrome_without_security: {
	    base: 'Chrome',
	    flags: ['--disable-web-security'],
	    displayName: 'Chrome w/o security'
	  }
	},
    captureTimeout: 60000,
    singleRun: true,
    concurrency: Infinity
  });
};