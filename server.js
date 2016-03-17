var express = require('express');
var app = express();

app.use(express.static(__dirname));

var server = app.listen(3000, function () {
  var host = '127.0.0.1';
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});