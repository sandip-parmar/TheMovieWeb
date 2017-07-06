angular.module('shared')
  .factory('MovieService', function($http, Configuration){

      baseUrl = Configuration.baseUrl;
      moviesBaseUrl = Configuration.moviesBaseUrl;
      apiVersion = Configuration.apiVersion;
      apiKey = Configuration.apiKey;
      language = Configuration.language;
      baseImageUrlw300 = Configuration.baseImageUrlw300;
      baseImageUrlw130 = Configuration.baseImageUrlw130;
      baseImageUrlw185 = Configuration.baseImageUrlw185;

      var MovieService = {
        baseImageUrlw185 : baseImageUrlw185,
        baseImageUrlw130 : baseImageUrlw130,
        baseImageUrlw300 : baseImageUrlw300,
        getPopularMovies: getPopularMovies,
        getTopRatedMovies: getTopRatedMovies,
        getMovie : getMovie,
        getMovieCast: getMovieCast,
        getMovieRecommendation: getMovieRecommendation,
        getMovieBySearch: getMovieBySearch
      };

      return MovieService;

      function getPopularMovies(pageValue){
          return $http.get(moviesBaseUrl +
                          'popular?api_key=' + apiKey +
                          '&language=' + language +
                          '&page=' + pageValue,
                          { cache: true });

      };


      // api to get top rated movies
       function getTopRatedMovies(pageValue){
        return $http.get(moviesBaseUrl +
                        'top_rated?api_key=' + apiKey +
                        '&language=' + language +
                        '&page=' + pageValue,
                        { cache: true });
      };


      // api to get movie based on id
      function getMovie(id){
        console.log("MovieService call with id: " + id);
        return $http.get(moviesBaseUrl +
           id +
          '?api_key=' + apiKey +
          '&language=' + language,
          { cache: true });
      };

      // get movie cast
      function getMovieCast(id){
        return $http.get(moviesBaseUrl +
           id +
          '/credits' +
          '?api_key=' + apiKey +
          '&language=' + language,
          { cache: true });
      };

      // get movies recommendations
      function getMovieRecommendation(id){
        return $http.get(
          moviesBaseUrl +
          id +
          '/recommendations' +
          '?api_key=' + apiKey,
          {cache: false}
        )
      };

      //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
      function getMovieBySearch(name){
        return $http.get(
              baseUrl +
              apiVersion +
              "search/" +
              "movie?" +
              "api_key=" + apiKey + "&" +
              "query=" + name,
              {cache: true}
        )
      };
});
