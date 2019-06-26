var express = require('express');
var app = express();

//Reusable controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var customer = [ {
					"name":"abhi",
					"address":"pune"
					}
    
  ];
  res.send(products);
};

// setting router to map requests  with controllers
app.get ('/products',productController);
var server = app.listen(8090, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8090", host, port)
})