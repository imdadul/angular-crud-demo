
angular.module('MovieManager').directive('confirmationDialog',
    ['$modal', 
        function ($modal) {
            return {
                restrict: 'EA',
                link: function (scope, el, attrs) {
                    var modal;
                    scope.clickConfirm = function () {
                        if (angular.isDefined(attrs.onConfirmCallback)) {
                            scope.onConfirmCallback = scope.$eval(attrs.onConfirmCallback);
                            modal.hide();
                        }
                    }

                    if (angular.isDefined(attrs.msg)) {
                        scope.msg = attrs.msg;
                    }

                    el.bind('click',function () {

                        if(modal==undefined){
                            modal = $modal({
                                scope: scope,
                                templateUrl: '/app/directive/confirmation-dialog/confirmation-dialog.html',
                                show: false,
                            });
                        }
                        
                        modal.$promise.then(function () {
                            modal.show();
                        });

                    });

                    scope.cancel = function () {
                       modal.hide();
                    }
                }
            }

        }]);
