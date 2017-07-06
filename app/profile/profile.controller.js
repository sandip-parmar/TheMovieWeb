angular.module('profile')
.controller('ProfileController', ['$scope', 'Auth', function($scope, Auth){

  // Get the currently signed in user
  var user  = Auth.$getAuth();
  var self = this;
  this.displayName = user.displayName;
  this.email = user.email;
  this.password = '';
  self.password_error = '';
  self.email_error = '';

  this.updateName = function(){
    user.updateProfile({
      displayName: this.displayName
    }).then(
      function(success){
        console.log("Name updated.");
      }, function(error){
        console.log("Problem in updating name.");
      }
    )
  };

  this.updateEmail = function(){
    user.updateEmail(this.email).then(
      function(success){
        console.log("Email updated.");
      }, function(error){
        self.email_error = error.message;
        console.log("Problem in updating email.");
      }
    )
  };

  this.updatePassword = function(){
    user.updatePassword(this.password).then(
      function(success){
        console.log("Password Changed.");
      },function(error){
        console.log(error.message);
        self.password_error = error.message;
        console.log("There is error in updating password.");
      }
    )
  }
}]);
