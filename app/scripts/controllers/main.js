'use strict';

/**
 * @ngdoc function
 * @name productFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productFrontendApp
 */
angular.module('productFrontendApp')
  .controller('MainCtrl', function ($scope, Restangular) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
