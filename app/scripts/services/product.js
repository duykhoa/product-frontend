'use strict';

/**
 * @ngdoc service
 * @name productFrontendApp.product
 * @description
 * # product
 * Factory in the productFrontendApp.
 */
angular.module('productFrontendApp')
  .factory('ProductService', function (Restangular) {
    var service = Restangular.all('products').getList();

    return {
      updateProduct: function (id, data) {
        service.one(id).put({data: data});
      }
    };
  });
