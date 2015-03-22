var app = angular.module('app', ['gs.preloaded', 'ui.bootstrap'], function ($interpolateProvider) {
  // Conflits avec le template Swig, on remplace la syntaxe Angular {{ }} par [[ ]]
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}); 


// récupération des data passées par le serveur node
app.service('locals', ['$preloaded', function ($preloaded){
  this.keywords = $preloaded.keywords;
  this.tpls = $preloaded.tpls;
}])


app.controller('KeywordSearch', ['$scope', 'locals', function ($scope, locals) {
  $scope.keywords = locals.keywords;
}]);

app.controller('KeywordList', ['$scope', 'locals', function ($scope, locals) {
  $scope.keywords = locals.keywords;
}]);

app.controller('Main', ['$scope', 'locals', function ($scope, locals) {
  $scope.tpls = locals.tpls;
}]);