angular.module('movieDetails')
  .controller('MovieDetailsController', [ '$routeParams', '$http', 'MovieService', function MovieDetailsController($routeParams, $http, MovieService){

    this.queryValue = $routeParams.movieId;

    var self = this;
    this.tab = 1;
    this.movieDetails = {};
    this.movieCast = {};
    this.recommendedMovies = {};
    this.imageBaseUrl = MovieService.baseImageUrlw300;
    this.profileBaseUrl = MovieService.baseImageUrlw130;

    this.setTab = function(tabValue){
      this.tab = tabValue;
    }

    this.isSet = function(tabValue){
      return this.tab === tabValue;
    }

    // Get movie data
    MovieService.getMovie(this.queryValue)
      .then(
        function(success){
          self.movieDetails = success.data;
          self.movieDetails.imageUrl = self.imageBaseUrl + self.movieDetails.poster_path;
        },
        function(error){

        }
      );

    // get movie-cast data
    MovieService.getMovieCast(this.queryValue)
      .then(
        function(success){
          self.movieCast = success.data.cast;
        },
        function(error){

        }
      );

      MovieService.getMovieRecommendation(this.queryValue)
        .then(
          function(success){
            self.recommendedMovies = success.data.results;
          },
          function(error){

          }
        );
  }]);
