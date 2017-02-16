(function() {
  var customerFactory = function() {
  
      var customers = [
      {
        id: 1, 
        joined: '2012-12-01', 
        name:'Jeremy Wilson', 
        city:'Seattle', 
        orderTotal: '30.00',
        orders: [
          {
            id: 1,
            product: 'Shoes',
            total: 30.00
          }
        ]
      },
      {
        id: 2, 
        joined: '2014-07-01', 
        name:'Alexander Wilson', 
        city:'Renton', 
        orderTotal: '20.00', 
        orders: [
          {
            id: 1,
            product: 'Gloves',
            total: 20.00
          }
        ]
      },
      {
        id: 3, 
        joined: '2016-11-01', 
        name:'Anika Wilson', 
        city:'Kent', 
        orderTotal: '10.00', 
        orders: [
          {
            id: 1,
            product: 'Purse',
            total: 50.00
          }
        ]
      },
      {
        id: 4, 
        joined: '2017-01-07', 
        name:'Scott Hills', 
        city:'Shoreline', 
        orderTotal: '100.00', 
        orders: [
          {
            id: 1,
            product: 'Laptop case',
            total: 100.00
          }
        ]
      }
    ];

    var factory = {};
    factory.getCustomers = function() {
      return customers;
    };

    factory.getCustomer = function(customerId) {
      // Search the customers for the customerId
      for (var i=0, len=customers.length; i<len; i++) {
        if (customers[i].id === parseInt(customerId)) {
          return customers[i];
        }
      }
      return {};
    }

    return factory;
  };

  angular.module('customersApp').factory('customersFactory', customerFactory);
}());