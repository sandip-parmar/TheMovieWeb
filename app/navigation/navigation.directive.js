angular.module('navigation')
  .directive('navigationBar', {
    restrict: 'E',
    templateUrl: 'navigation/navigation.html',
    controller: NavigationCtrl
  });
