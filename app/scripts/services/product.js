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
        console.log(product);

        var data = {
          product: {
            name: product.name,
            description: product.description,
            price: product.price
          }
        };

        var images_attributes = []

        for (var i = 0; i < product.images.length; i++) {
          images_attributes.push({
            image_id: product.images[i].id
          })
        }

        data.product.product_images_attributes = images_attributes;

        var services = Restangular.one("products", product.id);
        return services.customPOST(data);
      },

      deleteProduct: function(product) {
        var services = Restangular.one("products", product.id);
        return services.customDELETE();
      }
    };
  });
