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
  'firebase'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/login', {
      template: '<login></login>'
    })
    .when('/signup', {
      template: '<signup></signup>'
    })
    .when('/movies', {
      template: '<all-movies></all-movies>'
    })
    .when('/movie/:movieId',{
      template: '<movie-details></movie-details>'
    })
    .when('/dashboard', {
      template: '<all-movies></all-movies>',
    })
    .otherwise({redirectTo: '/movies'});
}]);
