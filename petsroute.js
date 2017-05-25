var express = require ('express');
var router = express.Router();
//let data = require ('./pets.json')
var bodyParser = require ('body-parser');
var fs = require('fs');

router.get('/pets/:id', function(req, res){
  let data;
  fs.readFile('./pets.json', 'utf8', function(err, bodyJson){
    if(err){
      res.status(404).send('Not Found')
    }
    else{
      data = JSON.parse(bodyJson);
      if(req.params.id < 0 || req.params.id >= data.length){
        res.status(404);
        res.type('text/plain');
        res.send('Not Found');
      }
      else{
        let index = req.params.id;
        res.status(200).json(data[index]);
      }
    }

  })
  //console.log(data[0])

});

router.get('/pets', function(req, res){
  let data;
  fs.readFile('./pets.json', 'utf8', function(err, bodyJson){
    if(err){
      res.status(404).send('Not Found')
    }
    else{
      data = JSON.parse(bodyJson);
      res.status(200).json(data);
    }
  })
});

router.post('/pets', function(req, res){
  let data;
  fs.readFile('./pets.json', 'utf8', function(err, bodyJson){
    if(err){
      res.status(404).send('Not Found')
    }
    else{
      data = JSON.parse(bodyJson);
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
        fs.writeFileSync('./pets.json',JSON.stringify(data));
        res.json(data[2]);
      }

    }
  })

});

router.patch('/pets/:id', function(req,res){
  let data;
  fs.readFile('./pets.json', 'utf8', function(err, bodyJson){
    if(err){
      res.status(404).send('Not Found')
    }
    else{
      data = JSON.parse(bodyJson);
      let index = req.params.id;
      res.status(200);
      var newData = data
      if(req.body.name){
        newData[index].name = req.body.name;
      }
      if(req.body.age){
        newData[index].age = req.body.age;
      }
      if(req.body.kind){
        newData[index].kind = req.body.kind;
      }
      data = newData;
      fs.writeFileSync('./pets.json', JSON.stringify(data));
      res.json(data[index]);
    }
  });
});

router.delete('/pets/:id', function(req, res){
  let data;
  let index = req.params.id
  fs.readFile('./pets.json', 'utf8', function(err, bodyJson){
    if(err){
      res.status(404);
      res.send('Not Found');
    }
    else{
      data = JSON.parse(bodyJson);
      res.status(200);
      let newData = data;
      let remove = newData.splice(index,1);
      data = newData;
      fs.writeFileSync('./pets.json',JSON.stringify(data));
      res.json(remove[0]);
    }
  })
})


module.exports = router
