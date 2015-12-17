var express = require('express');

var router = express.Router();

router.get('/:name?/:article', function(req, res) {
    console.log(req.params.name + 'one');
    console.log(req.params.article + 'two');
});

module.exports = router;