var express = require('express');

var render = require('../assist/render');
var router = require('./router');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname +  '/../client/view');

app.get('/', render('basis/index'));
app.get('/:name', router);

module.exports = app;