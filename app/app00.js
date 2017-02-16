(function() {

//This configures the routes and associates each route with a view and a controller
  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function ($routeProvider) {

    $routeProvider
      .when('/', 
      {
        controller: 'CustomersController',
        templateUrl: 'app/views/customers.html'
      })
      //Define a route that has a route parameter in it (:customerID)
      .when('/orders/:customerId',
        {
          controller: 'OrdersController',
          templateUrl: 'app/views/orders.html'
        })
      .otherwise({redirectTo: '/' });

    });

}());