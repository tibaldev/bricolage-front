var app = angular.module('app', ['gs.preloaded', 'ui.bootstrap']);

app.config(['$interpolateProvider', function ($interpolateProvider) {
  // conflits avec le template swig, on remplace la syntaxe Angular {{ }} par [[ ]]
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}])

// récupération des data passées par le serveur node
app.service('locals', ['$preloaded', function ($preloaded){
  this.tpls = $preloaded.tpls;
  this.keywords = $preloaded.keywords;
}])


app.controller('KeywordSearch', ['$scope', 'locals', function ($scope, locals) {
  $scope.keywords = locals.keywords;
}]);

app.controller('KeywordList', ['$scope', 'locals', function ($scope, locals) {
  $scope.keywords = locals.keywords;
}]);

app.controller('Main', ['$scope', 'locals', function ($scope, locals) {
  $scope.tpls = locals.tpls;
  console.log($scope.tpls);
  console.log($scope.kw);
}]);