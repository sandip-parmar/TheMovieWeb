angular.module('auth')
  .factory('AuthService', ['$http', function($http){

    var service = {
      login: login,
      signup: signup
    };

    return service;

    function login(user){
      return $http.get('json/users.json');
    }

    function signup(user){
      return true;
    }

  }]);
