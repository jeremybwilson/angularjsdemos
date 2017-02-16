// Option 1
/*
app.controller('CustomersController', function ($scope) {

  $scope.sortBy = 'name';
  $scope.reverse = false;
  
  $scope.customers= [{joined: '2012-12-01', name:'Jeremy Wilson', city:'Seattle', orderTotal: '30.00'},{joined: '2014-07-01', name:'Alexander Wilson', city:'Renton', orderTotal: '20.00'},{joined: '2016-11-01', name:'Anika Wilson', city:'Kent', orderTotal: '10.00'}];

  $scope.doSort = function(propName) {
    $scope.sortBy = propName;
    $scope.reverse = !$scope.reverse;
  };
});
*/
// Option 2
/*(function() {

  angular.module('customersApp')
    .controller('CustomersController', function ($scope) {
      $scope.sortBy = 'name';
      $scope.reverse = false;
      
      $scope.customers= [{joined: '2012-12-01', name:'Jeremy Wilson', city:'Seattle', orderTotal: '30.00'},{joined: '2014-07-01', name:'Alexander Wilson', city:'Renton', orderTotal: '20.00'},{joined: '2016-11-01', name:'Anika Wilson', city:'Kent', orderTotal: '10.00'}];

      $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      };
  });

}());*/

// Option 3a, preferred approach
(function() {

  var CustomersController = function ($scope, customersFactory) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];

    function init() {
      $scope.customers = customersFactory.getCustomers();
    }
    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ['$scope', 'customersFactory'];

  angular.module('customersApp')
    .controller('CustomersController', CustomersController);

}());

// Option 3b, dealing with script minification
/*(function() {

  var CustomersController = function ($scope, foo, bar) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

      $scope.customers= [{joined: '2012-12-01', name:'Jeremy Wilson', city:'Seattle', orderTotal: '30.00'},{joined: '2014-07-01', name:'Alexander Wilson', city:'Renton', orderTotal: '20.00'},{joined: '2016-11-01', name:'Anika Wilson', city:'Kent', orderTotal: '10.00'}];

      $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
      };
    };

    //  CustomersController.$inject = ['$scope', 'foo', 'bar'];

    angular.module('customersApp')
    .controller('CustomersController', CustomersController);

}()); */