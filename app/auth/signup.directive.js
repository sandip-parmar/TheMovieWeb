angular.module('auth')
  .directive('signup', function(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'auth/signup.html',
      controller: 'AuthController'
    }
  });
