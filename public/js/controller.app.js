var app = angular.module('app', ['gs.preloaded']);

app.service('localdata', ['$preloaded', function($preloaded){
  this.keywords = $preloaded
}])

app.controller('Main', ['$scope', 'localdata', function($scope, localdata) {
  console.log('localdata', localdata);
}]);