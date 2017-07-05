angular.module('auth', ['firebase', 'ui.router'])
  .config(['$stateProvider', function($stateProvider){

      var signinState = {
        name: 'signin',
        url: '/signin',
        component: 'signin'
      };

      var signupState = {
        name: 'signup',
        url: '/signup',
        component: 'signup'
      };

      $stateProvider.state(signinState);
      $stateProvider.state(signupState);
  }])
