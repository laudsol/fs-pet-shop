var data = require('./pets.json');
var fs = require('fs');
var inputs = process.argv
// var str = fs.readFileSync(inputs,'utf8');

if (inputs[2] === 'READ') {
  if (inputs[3]) {
    console.log(data[inputs[3]]);
  } else {
      console.log(data);
  }
}

if ()
process.exit(1);
