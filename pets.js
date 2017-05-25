

var inputs = process.argv;
var data = require ('./pets.json');
var fs = require ('fs');


if(inputs.length === 2){
  console.error('Usage: node pets.js [read | create | update | destroy]');
  process.exit(1);
}
else if(inputs[2] === "read"){
  if(inputs[3]){
    if(inputs[3] >= 0 && inputs[3]< data.length){
      console.log(data[inputs[3]])
    }
    else{
      console.error('Usage: node pets.js [read | create | update | destroy]')
    }
  }
  else{
    console.log(data);
  }
}
else if(inputs[2] === 'create'){
  if(inputs.length === 6){
    var newData = data;
    data.push({age: parseInt(inputs[3]), kind: inputs[4], name: inputs[5]});

    fs.writeFile('./pets.json', JSON.stringify(newData));
    console.log(data[2]);
  }
  else{
    console.error('Usage: node pets.js create AGE KIND NAME')
    process.exit(1)
  }
}
else if(inputs[2] === 'update'){
  var newData;
  fs.readFile('./pets.json', 'utf8', function(err, jsonData){
    newData = JSON.parse(jsonData);

  //console.log(newData)

  if(inputs.length === 7){
    let index = parseInt(inputs[3]);
    newData[index].age = inputs[4];
    newData[index].kind = inputs[5];
    newData[index].name = inputs[6];
    fs.writeFile('./pets.json', JSON.stringify(newData));
    console.log(newData[index])
  }
  else{
    console.error('Usage: node pets.js create AGE KIND NAME')
    process.exit(1)
  }
});
}
