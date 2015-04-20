angular.module('gjvBrowse')

.directive('imageOnLoad', function() {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('load', function() {
            	elem.addClass('showImage');
            });
        }
    };
})
