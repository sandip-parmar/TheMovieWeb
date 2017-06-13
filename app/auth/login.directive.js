angular.module('auth')
  .directive('login', function(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'auth/login.html',
      controller: 'AuthController'
    }
  });
