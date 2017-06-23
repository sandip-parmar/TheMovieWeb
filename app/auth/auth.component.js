angular.module('auth')
  .component('signup', {

    templateUrl: 'auth/signup.html',
    controller: 'AuthController'
  })
  .component('login', {
    templateUrl: 'auth/login.html',
    controller: 'AuthController'
  });
