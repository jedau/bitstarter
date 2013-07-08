var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs'); 
  buf = new Buffer(256);
  response.send(buf.toString('utf8', fs.readFile('index.html', 'utf8')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
