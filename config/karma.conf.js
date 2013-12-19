module.exports = function(config) {
   config.set({

      preprocessors: {
         // source files, that you wanna generate coverage for
         // do not include tests or libraries
         // (these files will be instrumented by Istanbul)
         'app/js/**/*.js': ['coverage']
      },
      reporters: ['progress', 'coverage'],
      coverageReporter: {
         type : 'html',
         dir : 'coverage/'
      },

      // your config
      frameworks: ["jasmine"],

      basePath : '../',

      files : [
         'app/lib/angular/angular.js',
         'app/lib/angular/angular-*.js',
         'test/lib/angular/angular-mocks.js',
         'app/js/**/*.js',
         'test/unit/*.js'
      ],

      autoWatch : true,

      browsers : ['PhantomJS'],

      junitReporter : {
         outputFile: 'test_out/unit.xml',
         suite: 'unit'
      },

      plugins: [
         'karma-jasmine',
          'karma-coverage',
         //'karma-chrome-launcher',
          'karma-phantomjs-launcher',
         //'karma-firefox-launcher',
         'karma-junit-reporter'
      ]

   });
};
