'use strict';

/**
 * @ngdoc function
 * @name productFrontendApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the productFrontendApp
 */
angular.module('productFrontendApp')
  .controller('EditCtrl', function ($scope, Restangular) {
      Restangular.setDefaultHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
      Restangular.setDefaultHeaders({'Access-Control-Allow-Origi': '*'});

      $scope.submit = function() {

        $scope.product.put();
      }
  });
