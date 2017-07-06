angular.module('profile')
  .component('profile', {
    bindings: {
      currentUser: '<'
    },
    templateUrl: 'profile/profile.html',
    controller: 'ProfileController'
  });
