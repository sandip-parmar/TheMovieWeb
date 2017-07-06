angular.module('profile', ['ui.router', 'auth'])
  .run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $state.go("home");
    }
  });
}]);


angular.module('profile')
  .config(['$stateProvider', function($stateProvider){

    var profileState = {
      name: 'profile',
      url: '/profile',
      component: 'profile',
      resolve: {
        currentUser: ['Auth', function(Auth){
          return Auth.$requireSignIn();
        }]
      }
    };

    $stateProvider.state(profileState);
  }]);
