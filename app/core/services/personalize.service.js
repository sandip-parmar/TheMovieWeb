angular.module('shared')
  .factory('Personalize', ['$http','Auth', '$firebaseObject',
    function($http, Auth, $firebaseObject){

    var user = Auth.$getAuth();
    var ref = firebase.database().ref('fav');


    var service = {
      addToFavourite: addToFavourite,
      addToWatchList: addToWatchList,
      createNewList: createNewList,
      setMovieRating: setMovieRating,
      getAllFavourite: getAllFavourite,
      isFavourite: isFavourite
    };

    return service;

    // Add movie to favourite list
    function addToFavourite(favMovieObject){
      var user = Auth.$getAuth();
      if(user){
        var favListRef = ref.child(user.uid).child(favMovieObject.id);
        var favList = $firebaseObject(favListRef);
          favList.id = favMovieObject.id;
          favList.name = favMovieObject.name;
          favList.poster_path = favMovieObject.poster_path;
        return favList.$save();
      }else{
        $location.path('/signin');
      }
    };

    // Get user's favourite movie list
    function getAllFavourite(){
      if(user){
        var favListRef = ref.child(user.uid);

        return $firebaseArray(favListRef);
      }
    }

    // Check if movie is in favourite list
    function isFavourite(id){

      var user = Auth.$getAuth();
      var favListRef = ref.child(user.uid).child(id);
      var movie = $firebaseObject(favListRef);

      return movie;
    }

    function addToWatchList(){

    };

    function createNewList(){};

    function setMovieRating(){};

  }]);
