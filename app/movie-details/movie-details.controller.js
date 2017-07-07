angular.module('movieDetails')
  .controller('MovieDetailsController', ['$scope','MovieService', 'Personalize', 'Auth', function($scope, MovieService, Personalize, Auth){

    this.queryValue = this.movieId;
    this.user = Auth.$getAuth();
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

    this.imageBaseUrl = MovieService.baseImageUrlw300;
    this.profileBaseUrl = MovieService.baseImageUrlw130;


    // check if movie is part for favourite list if user is authenticated
    if(this.user){
      this.isFavourite = Personalize.isFavourite(this.movieDetails.id);
    }

    // add movie to favourite
    this.addToFav = function(){
      if(this.user){
        var movieFavObject = {
          id: this.movieDetails.id,
          poster_path: this.movieDetails.imageUrl,
          name: this.movieDetails.original_title
        };
        Personalize.addToFavourite(movieFavObject).then(function(success){
          console.log("Movie added successfully.");
        },function(error){
          console.log(error);
        });
      }else{
        console.log("Provide some means to tell user to signin first.");
      }

    }

    this.setTab = function(tabValue){
      this.tab = tabValue;
    }

    this.isSet = function(tabValue){
      return this.tab === tabValue;
    }

  }]);
