var customersApp = angular.module('customersApp', []);

(function() {

var CustomersController = function ($scope) {
  $scope.customers = [
    {joined: '2012-12-01', name:'Jeremy Wilson', city:'Seattle', orderTotal: '30.00'},
    {joined: '2014-07-01', name:'Alexander Wilson', city:'Renton', orderTotal: '20.00'},
    {joined: '2016-11-01', name:'Anika Wilson', city:'Kent', orderTotal: '10.00'}
  ];
};

angular.module('customersApp').controller('CustomersController', CustomersController);

}());