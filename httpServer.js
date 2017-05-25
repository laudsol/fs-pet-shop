var http = require('http');
var port = process.env.PORT || 3003;
var data = require('./pets.json');

var server = http.createServer(function(req,res){
  if(req.method==='GET' && req.url=== '/pets') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    var jdata = JSON.stringify(data)
    res.end(jdata);
  } else if(req.method==='GET' && req.url=== '/pets/0') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    var jdata = JSON.stringify(data[0])
    res.end(jdata);
  } else if(req.method==='GET' && req.url=== '/pets/1') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    var jdata = JSON.stringify(data[1])
    res.end(jdata);
  } else if (req.method==='GET' && req.url=== '/pets/2' || req.url=== '/pets/-1') {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, function(){
  console.log("Listening on port 3003");
});


module.exports = server;
