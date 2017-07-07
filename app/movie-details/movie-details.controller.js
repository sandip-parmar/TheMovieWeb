angular.module('movieDetails')
  .controller('MovieDetailsController', ['$scope','MovieService', 'Personalize', function($scope, MovieService, Personalize){

    console.log($scope.$parent.$resolve.movie.data);

    this.queryValue = this.movieId;

    var self = this;
    this.tab = 1;

    // retrieve movie data from resolve
    this.movieDetails = $scope.$parent.$resolve.movie.data;

    // add full image url in movieDetails object
    this.movieDetails.imageUrl = MovieService.baseImageUrlw300 + this.movieDetails.poster_path;

    // retrieve movie cast data from resolve
    this.movieCast = $scope.$parent.$resolve.cast.data.cast;

    // retrieve recommended movies from resolve
    this.recommendedMovies = $scope.$parent.$resolve.recommended.data.results;
    console.log(this.recommendedMovies);

    this.imageBaseUrl = MovieService.baseImageUrlw300;
    this.profileBaseUrl = MovieService.baseImageUrlw130;

    // check if movie is part for favourite list
    this.isFavourite = Personalize.isFavourite(this.movieDetails.id);

    // add movie to favourite
    this.addToFav = function(){
      var movieFavObject = {
        id: this.movieDetails.id,
        poster_path: this.movieDetails.imageUrl,
        name: this.movieDetails.original_title
      };
      console.log(movieFavObject);
      Personalize.addToFavourite(movieFavObject).then(function(success){
        console.log("Movie added successfully.");
      },function(error){
        console.log(error);
      });
    }

    this.setTab = function(tabValue){
      this.tab = tabValue;
    }

    this.isSet = function(tabValue){
      return this.tab === tabValue;
    }

  }]);
