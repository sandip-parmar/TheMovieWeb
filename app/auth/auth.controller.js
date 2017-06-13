angular.module('auth')
  .controller('AuthController', ['$location', '$http', '$scope', 'AuthService',  function($location, $http, $scope, AuthService){

    $scope.user = {};

    $scope.login = function(){
      result = true;

      if (result) {
        $location.path('/movies');
      }
    }

    $scope.signup = function(){
      $location.path('/movies');
    }

    $scope.logout = function(){
      $location.path('/login');
    }
  }]);
