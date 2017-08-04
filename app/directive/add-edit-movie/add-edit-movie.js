(function(){

angular.module('MovieManager').directive('addEditMovie',
    ['$modal','$alert','notificationService',
        function ($modal,$alert,notificationService) {
            return {
                restrict: 'E',
                link: function (scope, el, attrs) {
                    var modal;
                    var a=1;
                    el.bind('click', function(e) {

                        if (angular.isDefined(attrs.movie)) {
                            scope.movie = angular.copy(scope.$eval(attrs.movie));
                            scope.editMode = true;
                            scope.title = "Edit '"+scope.movie.title+"'";
                        }
                        else {
                            scope.editMode = false;
                            scope.title = 'Add new movie'
                        }

                        if(modal==undefined){
                            modal = $modal({
                                title: scope.title,
                                scope: scope,
                                templateUrl: '/app/directive/add-edit-movie/add-edit-movie.html',
                                show: false
                            });
                        }
                        
                        modal.$promise.then(function () {
                            modal.show();
                        });
                    });

                    scope.cancel = function () {
                       modal.hide();
                    }

                    scope.add = function(movie){
                        if(typeof movie.actors == "string"){
                            movie.actors = movie.actors.split(',');
                        }
                            
                        this.movies.push(movie);
                        showAlert();
                    }

                    scope.edit = function(movie){
                        if(typeof movie.actors == "string"){
                            movie.actors = movie.actors.split(',');
                        }

                        for(var i = 0; i < this.movies.length; i++){
                            if(this.movies[i].title == movie.title) {
                                this.movies[i] = movie;
                                break;
                            }
                        }
                        showAlert();
                    }

                    
                    var showAlert = function() {

                        var msg = '';
                        if(scope.editMode) {
                            msg = "Movie updated succesfully!"
                        } 
                        else {
                            msg = "New movie added succesfully!"
                        }

                        notificationService.showSuccessNotification(msg)


                    };
                }
            }

        }]);

})();