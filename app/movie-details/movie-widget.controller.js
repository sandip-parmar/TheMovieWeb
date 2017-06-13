angular.module('movieDetails')
  .controller('MovieWidgetCtrl', ['$http', '$scope','Configuration', 'MovieService', function($http, $scope, Configuration, MovieService){

      var self = $scope;
      $scope.data = {};

      MovieService.getMovie($scope.id)
      .then(
        function(success){
          $scope.data = success.data;
          $scope.data.imageUrl = Configuration.baseImageUrlw130 + self.data.poster_path;
        },
        function(error){

        }
      );
  }]);
