angular.module('shared')
  .factory('Personalize', ['$http', 'Session', function($http, Session){

    var service = {
      addToFavourite: addToFavourite,
      addToWatchList: addToWatchList,
      createNewList: createNewList,
      setMovieRating: setMovieRating
    };

    return service;

    function addToFavourite(movie){
      Session.favourite(movie);
    };

    function addToWatchList(){

    };

    function createNewList(){};

    function setMovieRating(){};

  }]);
