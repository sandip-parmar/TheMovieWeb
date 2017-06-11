angular.module('movies')
  .controller('MoviesController', ['$http', 'MovieService', function($http, MovieService ){

   var self = this;
   this.returnedMoviesPopular = {};
   this.returnedMoviesTopRated = {};
   this.baseImageUrl = MovieService.baseImageUrlw185;
   //'https://image.tmdb.org/t/p/w185';
   this.requestPage = 1;

   // Fetch movies data from service for first time
   MovieService.getPopularMovies(this.requestPage).
                then(
                  function(success){
                    self.returnedMoviesPopular = success.data.results;
                  },
                  function(error){
                    console.log("Error in fetching popular movies data from server.");
                  }
                );


    // update movies array based on scrolling
    this.myPagingFunction = function(){
       this.requestPage = this.requestPage + 1;
        MovieService.getPopularMovies(this.requestPage)
        .then(
          function(success){
            for(i = 0; i < success.data.results.length; i++){
              self.returnedMoviesPopular.push(success.data.results[i]);
            }
          },
          function(error){
            console.log("Error in getting continuous data from service.");
          }
        );
     };
}]
);
