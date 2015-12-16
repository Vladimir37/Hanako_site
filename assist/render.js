function render(file) {
    return function(req, res, next) {
        res.render(file, {}, function(err, html) {
            if(err) {
                res.render('errors/e404');
            }
            else {
                res.end(html);
            }
        });
    }
};

module.exports = render;