var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
  response.end('Hello World');
}).listen(8081);