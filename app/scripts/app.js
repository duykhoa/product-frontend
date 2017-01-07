'use strict';

/**
 * @ngdoc overview
 * @name productFrontendApp
 * @description
 * # productFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('productFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ghiscoding.validation',
    'pascalprecht.translate',
    'ngFileUpload'
  ])
  .config(function (
    $stateProvider,
    $urlRouterProvider,
    RestangularProvider,
    $translateProvider
  ) {

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/main');

    // Config Restangular
    RestangularProvider.setBaseUrl('http://localhost:3000/');

    // Config TranslateProvider
    $translateProvider.useStaticFilesLoader({
      prefix: '/bower_components/angular-validation-ghiscoding/locales/validation/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
  })
  .run(function () {
    console.log('run');
  });
