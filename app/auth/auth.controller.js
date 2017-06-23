angular.module('auth')
  .controller('AuthController', ['$scope', 'Auth', function($scope, Auth){

      $scope.email = '';
      $scope.password = '';
      $scope.comfirmpass = '';

      // Sign up user
      $scope.signup = function(){
        Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
          .then(
            function(firebaseUser){
              $scope.message = "User created with uid: " + firebaseUser.uid;
            },
            function(error){
              $scope.error = error;
            });
      };

      // Log in user
      $scope.login = function(){
        Auth.$signInWithEmailAndPassword($scope.email, $scope.password)
            .then(
              function(firebaseUser){
                console.log("Signed in as:", firebaseUser.uid);
              },
              function(error){
                console.log(error);
              }
            );
      };

      // Delete user account
      $scope.delete = function(){
        $scope.message = null;
        $scope.error = null;

        // Delete the currently signed-in User
        Auth.$deleteUser().then(function(){
          $scope.message = "User Deleted";
        }).catch(function(error){
          $scope.error = error;
        });
      };

  }]);
