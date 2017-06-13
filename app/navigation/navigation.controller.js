angular.module('navigation')
  .controller('NavigationCtrl', ['$scope', 'MovieService', function($scope, MovieService){

    var self = $scope;
    $scope.query = '';
    $scope.results = {};

    $scope.getResult = function(){
      MovieService.getMovieBySearch($scope.query)
                        .then(
                          function(success){
                            $scope.results = success.data.results;
                            console.log($scope.results);
                          },
                          function(error){
                            console.log("Error in getResult");
                          }
                        );
      }
  }]);
