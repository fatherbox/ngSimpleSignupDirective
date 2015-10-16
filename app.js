/**
 * Created by Joao on 10/16/2015.
 */

var app = angular.module('simpleSignup', []);

app.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'optInTemplate.html',
        replace: true
    }
})