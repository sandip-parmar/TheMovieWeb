'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'shared',
  'movies',
  'movieDetails',
  'Config',
  'auth',
  'navigation'
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
    .otherwise({redirectTo: '/movies'});
}]);
