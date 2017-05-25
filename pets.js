

var inputs = process.argv;
var data = require ('./pets.json')
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

