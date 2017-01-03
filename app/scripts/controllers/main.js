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
    Restangular.all('products').getList()
    .then(function(products) {
      $scope.products = products;
    });
  });
