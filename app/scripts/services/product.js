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
    return {
      updateProduct: function (product) {
        var data = {
          product: {
            name: product.name,
            description: product.description,
            price: product.price,
            product_images_attributes: [
            ]
          }
        };

       var services = Restangular.one("products", product.id);
       return services.customPUT(data);
      },
      createProduct: function(product) {
        var data = {
          product: {
            name: product.name,
            description: product.description,
            price: product.price,
            product_images_attributes: [
            ]
          }
        };

       var services = Restangular.one("products", product.id);
       return services.customPOST(data);
      },

      deleteProduct: function(product) {
       var services = Restangular.one("products", product.id);
       return services.customDELETE();
      }
    };
  });
