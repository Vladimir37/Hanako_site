var express = require('express');

var render = require('../assist/render');
var router = require('./router');
var error = require('./error');

var app = express();

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