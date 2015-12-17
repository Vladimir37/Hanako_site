var express = require('express');

var pages = require('../assist/pages');

var router = express.Router();

router.get('/:lang?/:article', pages);

module.exports = router;