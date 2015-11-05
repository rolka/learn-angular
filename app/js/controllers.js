'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);

//

angular.module( 'myApp.controllers', [] ).controller('FinanceController', function( $scope ){

  $scope.salary = 0;
  $scope.percentage = 0;
  $scope.result = function(){
    return $scope.salary * $scope.percentage * 0.01;
  };

});


angular.module('myApp',[]).controller('GreetingController' ,function($scope){
  $scope.now=new Date(); //set the model 'now' on scope
  $scope.greeting='Hello'; //set the name model on scope
});



