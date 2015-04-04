var app = angular.module('app', ['gs.preloaded', 'ui.bootstrap']);

app.config(['$interpolateProvider', function ($interpolateProvider) {
  // conflits avec le template swig, on remplace la syntaxe Angular {{ }} par [[ ]]
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}]);


// récupération des data passées par le serveur node
app.service('locals', ['$preloaded', function ($preloaded){
  this.tpls = $preloaded.tpls;
  this.keywords = $preloaded.keywords;
}]);


// filtrage par mots clés
app.controller('KeywordSearch', ['$scope', 'locals', function ($scope, locals) {
  $scope.keywords = locals.keywords;
}]);


// liste des mots clés
app.controller('KeywordList', ['$scope', 'locals', function ($scope, locals) {
  $scope.keywords = locals.keywords;
}]);


// controlleur principal
app.controller('Ctrl_main', ['$scope', 'locals', function ($scope, locals) {
  $scope.tpls = locals.tpls;
}]);

// controlleur templates
app.controller('Ctrl_tpls', ['$scope', '$timeout', function ($scope, $timeout) {
  $timeout(function() {
    hljs.initHighlighting();
  }, 200);
}]);

