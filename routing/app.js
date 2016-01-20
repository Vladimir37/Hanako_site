var express = require('express');
var favicon = require('serve-favicon');

var render = require('../assist/render');
var router = require('./router');
var error = require('./error');

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

//set favicon
app.use(favicon('client/source/favicon/favicon.ico'));

//set template language
app.set('view engine', 'jade');
app.set('views', __dirname +  '/../client/view');

//static files
app.use('/src', express.static(__dirname + '/../client/source'));

//routing
app.get('/', render('basis/index'));
app.get('/:lang?/:article', router);

//error initiate
app.use(error);

module.exports = app;