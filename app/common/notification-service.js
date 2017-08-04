(function(){

angular.module('MovieManager').service('notificationService',
    ['$alert',function ($alert) {

      this.showSuccessNotification =  function(msg) {
        var myAlert = $alert({
            title: 'Success!', 
            content: msg,
            placement: 'top-right', 
            type: 'success', 
            keyboard: true,
            show: false,
            duration:3
        });
      
        myAlert.$promise.then(myAlert.show)
      }

    }]);

})();