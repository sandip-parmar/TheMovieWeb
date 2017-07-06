angular.module('movieDetails')
  .component('movieDetails', {
      bindings: {
        movie: '<',
        cast: '<',
        recommended: '<'
      },
      templateUrl: 'movie-details/movie-details.html' ,
      controller: "MovieDetailsController"
  });
