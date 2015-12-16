var express = require('express');

var router = express.Router();

router.get('/:name', function(req, res) {
    console.log(req.params.name);
});
router.get('/:name?/:article', function(req, res) {
    console.log(req.params.name);
    console.log(req.params.article);
});

module.exports = router;