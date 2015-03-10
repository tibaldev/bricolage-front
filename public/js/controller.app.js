var app = angular.module('app', ['gs.preloaded']);

app.controller('Main', ['$scope', '$preloaded', function($scope, $preloaded) {
  console.log('ici', $preloaded);
}]);