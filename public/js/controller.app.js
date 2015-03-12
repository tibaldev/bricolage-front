var app = angular.module('app', ['gs.preloaded', 'ui.bootstrap']);


// récupération des data passées par le serveur node
app.service('locals', ['$preloaded', function($preloaded){
  this.keywords = $preloaded.keywords;
}])


app.controller('KeywordSearch', ['$scope', 'locals', function($scope, locals) {
  $scope.keywords = locals.keywords;
}]);