angular.module('auth')
  .component('signup', {

    templateUrl: 'auth/signup.html',
    controller: 'AuthController'
  })
  .component('signin', {
    templateUrl: 'auth/login.html',
    controller: 'AuthController'
  });
