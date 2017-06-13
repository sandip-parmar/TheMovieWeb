angular.module('Config', [])
  .constant('Configuration', {
    moviesBaseUrl: 'https://api.themoviedb.org/3/movie/',
    baseUrl: 'https://api.themoviedb.org/',
    apiVersion: '3/',
    apiKey: 'cb4117a495e0b993cf4461ac303cd67d',
    language: 'en-US',
    baseImageUrlw300 : 'https://image.tmdb.org/t/p/w300/',
    baseImageUrlw130 : 'https://image.tmdb.org/t/p/w130/',
    baseImageUrlw185 : 'https://image.tmdb.org/t/p/w185',
  });
