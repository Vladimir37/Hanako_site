var express = require('express');

var router = require('./router');

var app = express();

app.get('/name:', router);