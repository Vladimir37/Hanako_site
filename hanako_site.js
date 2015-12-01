var http = require('http');
var app = require('./routing/app');

http.createServer(app).listen(3000);