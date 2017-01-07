'use strict';

/**
 * @ngdoc directive
 * @name productFrontendApp.directive:boostrapValidator
 * @description
 * # boostrapValidator
 */
angular.module('productFrontendApp')
  .directive('bootstrapValidationDecorator', function () {
    return {
      scope: {
        bootstrapValidationDecorator:'@'
      },
      restrict: 'A',
      require:  '^form',
      link: function (scope, el, attrs, MainCtrl) {
        scope.form = MainCtrl;

        if(scope.bootstrapValidationDecorator!=undefined && scope.bootstrapValidationDecorator!="") {
          scope.fieldName = scope.bootstrapValidationDecorator;
        } else {
          scope.fieldName = angular.element( el[0].querySelector("[name]") ).attr('name');
        }

        scope.$watch(
          function(scope) {
            if (scope.form != undefined && scope.form[scope.fieldName] != undefined) {
              return (scope.form[scope.fieldName].$touched || scope.form.$submitted) && scope.form[scope.fieldName].$invalid;
            }
            else{
              return false;
            }
          },
          function( newVal, oldVal ) {
            if(newVal != oldVal){
              el.toggleClass('has-error', newVal);
            }
          }
        );
      }
    }
  });
