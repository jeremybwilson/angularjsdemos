var express = require('express'),
    app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/'));
});

app.get('/customers/:id', function(req, res) {
  var customerId = parent(req.params.id);
  var data = {};
    for (var i=0, len=customers.length; i<len; i++ {
      if (customers[i].id === customerId) {
        data = customers[i];
        break;
      }
    })
  res.json(data);
});

app.get('/customers', function(req, res) {
  res.json(customers);
})

app.listen(8080);

console.log('Express listening on port 8080');

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