var data = require('./pets.json');
var express = require('express');
var app = express();

app.get('/pets',function(req,res){
  res.status(200).json(data);
});

app.get('/pets/0',function(req,res){
  res.status(200).json(data[0]);
});

app.get('/pets/1',function(req,res){
  res.status(200).json(data[1]);
});

app.get('/pets/2',function(req,res){
  res.status(404).type('text/plain').send("Not Found");
});

app.get('/pets/-1',function(req,res){
  res.status(404).type('text/plain').send("Not Found");
});

app.listen(3003, function() {
  console.log('Listening on port 3003');
});

module.exports = app;
