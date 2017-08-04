(function(){

  angular.module('MovieManager')
  .controller('MoviesController', ['$scope','notificationService', function($scope,notificationService) {  

    //init 
    $scope.movies = [
      {title: 'Titanic',   duration: 143,  actors: ['Leonardo Di Caprio','Kate Winslet'], director:'James Cameron'},
      {title: 'Fight Club',   duration: 105,  actors: ['Brad Pit','Edward Norton'], director:'David Fincher'},
      {title: 'Pulp Fiction',   duration: 123,  actors: ['Samuel L Jackson','John Travolta','Bruce Wills'], director:'Quentin Tarantino'},
      {title: 'The Dark Knight',   duration: 95,  actors: ['Christian','Heath Ledger'], director:'Christopher Nolan'},
      {title: 'shawshank redemption',  duration: 120,  actors: ['Morgan Freeman','Tim Robins'], director:'Frank Darabont'}
    ];
    
    $scope.orderByProp = 'title';
    
    //Events
    
    $scope.sort = function(prop){
      if($scope.orderByProp == prop) {
        if($scope.orderByProp.startsWith('-')){
          $scope.orderByProp = prop;
        }
        else  $scope.orderByProp = '-' + prop;
      }
      else $scope.orderByProp = prop;
    }

    $scope.delete = function(movie){
      for(var i = 0; i < $scope.movies.length; i++){
          if($scope.movies[i].title == movie.title) {
              index = i;
              break;
          }
      }
      $scope.movies.splice(index,1);
      notificationService.showSuccessNotification('Successfully deleted!')
    }
  }
  ])
})();