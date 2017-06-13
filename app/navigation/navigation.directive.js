angular.module('navigation')
  .directive('navigationBar', function(){
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'navigation/navigation.html',
      controller: 'NavigationCtrl'
    }
  });
