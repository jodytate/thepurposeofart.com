// var quoteCtrl = function ($scope) {
//      $scope.quote = 'something';
// }

angular.module('quotesModule', ['firebase']).controller('quoteCtrl', ['$scope', 'angularFire',
    function($scope, angularFire) {
      var ref = new Firebase('https://purpose-of-art.firebaseio.com/quotes');
      angularFire(ref.limit(15), $scope, "quotes");
      //$scope.quotation = 'Quote' + Math.floor(Math.random()*101);
      $scope.addQuote = function() {
        $scope.quotes[ref.push().name()] = {
          author: $scope.author, quotation: $scope.quotation
        };
        $scope.quote = "";
      }}]);
