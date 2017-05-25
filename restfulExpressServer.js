var express = require ('express');
var app = express();
var data = require ('./pets.json')
var morgan = require('morgan');
var bodyParser = require ('body-parser');
var petsRoute = require ('./petsroute.js');

app.use(bodyParser.json())

app.use(petsRoute);






app.listen(3000, function(){
  console.log('Listening on port 3000')
})

module.exports = app;
