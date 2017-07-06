'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'shared',
  'movies',
  'Config',
  'movieDetails',
  'auth',
  'navigation',
  'firebase',
  'ui.router',
  'profile'
]).
config(['$stateProvider', function($stateProvider) {

  var moviesState = {
    name: 'movies',
    url: '/movies',
    template: '<all-movies></all-movies>'
  };

  var movieIdState = {
    name: 'movie',
    url: '/movie/{movieId}',
    template: '<movie-details></movie-details>'
  };

  var dashboardState = {
    name: 'dashboard',
    url: '/dashboard',
    template: '<all-movies></all-movies>'
  };

  $stateProvider.state(moviesState);
  $stateProvider.state(movieIdState);
  $stateProvider.state(dashboardState);

  // $routeProvider
  //
  //   .when('/movies', {
  //     template: '<all-movies></all-movies>'
  //   })
  //   .when('/movie/:movieId',{
  //     template: '<movie-details></movie-details>'
  //   })
  //   .when('/dashboard', {
  //     template: '<all-movies></all-movies>',
  //   })
  //   .otherwise({redirectTo: '/movies'});
}]);
