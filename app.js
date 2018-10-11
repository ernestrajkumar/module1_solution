(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.lunchCheckClick = function () {
      if($scope.name == "") {
        $scope.message1 = "";
        $scope.message2 = "Please enter data first!";
      } else {
        var arrSplt = $scope.name.split(',');
        var arrCnt = arrSplt.length;
        console.log(arrCnt);
        if(arrCnt <= 3) {
          $scope.message1 = "Enjoy!";
          $scope.message2 = "";
        } else {
          $scope.message1 = "Too much!";
          $scope.message2 = "";
        }
      }
    };
  }
})();
