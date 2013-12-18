module.exports = function(config) {
   config.set({
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

      browsers : ['Chrome'],

      junitReporter : {
         outputFile: 'test_out/unit.xml',
         suite: 'unit'
      },

      plugins: [
         'karma-jasmine',
         'karma-chrome-launcher',
         //'karma-firefox-launcher',
         'karma-junit-reporter'
      ]

   });
};
