angular.module('movieDetails')
  .directive('movieWidget', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        id: '@',
      },
      templateUrl: 'movie-details/movie-widget.html',
      controller: 'MovieWidgetCtrl as mwCtrl'
    }
  });
