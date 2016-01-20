var http = require('http');
var app = require('./routing/app');

http.createServer(app).listen(app.get('port') ,app.get('ip'));