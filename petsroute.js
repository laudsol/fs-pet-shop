var express = require ('express');
var router = express.Router();
var data = require ('./pets.json')
var bodyParser = require ('body-parser');

router.get('/pets/:id', function(req, res){
  if(req.params.id < 0 || req.params.id >= data.length){
    res.status(404);
    res.type('text/plain');
    res.send('Not Found');
  }
  else{
    let index = req.params.id;
    res.status(200).json(data[index]);
  }
});

router.get('/pets', function(req, res){
  res.status(200).json(data);
});

router.post('/pets', function(req, res){
  let arr = Object.values(req.body);
  let test = false;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === ""){
      test = true
    }
  }
  if(test){
    res.status(400);
    res.type('text/plain');
    res.send('Bad Request');
  }
  else{

    res.status(200);
    let newData = data;
    newData.push(req.body);
    data = newData;
    res.json(data[2]);
  }

});

router.patch('/pets/3', function(req,res){
  res.status(200);
  //console.log(req.body.name)
  data[2].name = req.body.name;
  res.json(data[2]);
})

router.delete('/pets/3', function(req, res){
  res.status(200);
  var popped = data.pop();
  res.json(popped)
})


module.exports = router
