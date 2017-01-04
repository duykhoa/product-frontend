'use strict';

/**
 * @ngdoc function
 * @name productFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productFrontendApp
 */
angular.module('productFrontendApp')
  .controller('MainCtrl', function ($scope, Restangular, ProductService) {
    Restangular.all('products').getList()
    .then(function(products) {
      $scope.products = products

      $scope.submitProduct = function(product) {
        ProductService
          .updateProduct(12, {name: 'a'})
          .then(function (resp) {
            console.log(resp)
          });
      }

    });
  });
