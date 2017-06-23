angular.module('auth')
  .factory('Auth', ['$firebaseAuth', function($firebaseAuth){
    return $firebaseAuth();
  }]);
