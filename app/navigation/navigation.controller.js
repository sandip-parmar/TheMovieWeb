angular.module('navigation')
  .controller('NavigationCtrl', ['$scope', 'MovieService', 'Auth',
      function($scope, MovieService, Auth){

    var self = $scope;
    $scope.query = '';
    $scope.results = {};
    $scope.user = false;

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

      // Listen to the authentication event
      Auth.$onAuthStateChanged(function(firebaseUser){
        $scope.user = firebaseUser;
      });

      // signout function
      $scope.signout = function(){
        Auth.$signOut();
      }
  }]);
