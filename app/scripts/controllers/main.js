'use strict';

/**
 * @ngdoc function
 * @name productFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productFrontendApp
 */
angular.module('productFrontendApp')
  .controller('MainCtrl', function ($scope, $timeout, Restangular, ProductService) {
    Restangular.all('products').getList()
    .then(function(products) {
      $scope.products = products;
    });

    $scope.submitProduct = function(product) {
      ProductService
        .updateProduct(product)
        .then(function(resp){
          $("#editModal").modal('hide');
        })
    }

    $scope.showEditModal = function(product) {
      $scope.editProduct = product;
      $("#editModal").modal('show');
    }

    $scope.showNewModal = function(product) {
      $("#newModal").modal('show');
    }

    $scope.createProduct = function(product) {
      ProductService.createProduct(product)
      .then(function(resp) {
        $("#newModal").modal('hide');
        $scope.products.push(product);
      })
    }

    $scope.productInfo = function(product) {
      $scope.viewProduct = product.clone();
      $scope.viewProduct.images = [];

      $timeout(function(){
        $scope.viewProduct.images = product.images;
      })

      $("#showModal").modal("show");
    }

    $scope.deleteModal = function(product) {
      $scope.deletedProduct = product;
      $("#deleteModal").modal("show");
    }

    $scope.deleteProduct = function(product) {
      ProductService
        .deleteProduct(product)
        .then(function(resp){
          var index = $scope.products.indexOf(product);

          if (index > -1) {
            $scope.products.splice(index, 1);
          }

          $("#deleteModal").modal('hide');
        })
    }
  });
