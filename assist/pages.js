function render_pages(req, res, next) {
    var lang = req.params.lang;
    var article = req.params.article;
    if(lang && article) {
        res.render('main/' + lang + '/' + article, {}, function(err, result) {
            if(err) {
                res.render('errors/e404');
            }
            else {
                res.send(result);
            }
        });
    }
    else {
        var index_lang = lang || article;
        res.render('main/' + index_lang + '/index', {}, function(err, result) {
            if(err) {
                res.render('errors/e404');
            }
            else {
                res.send(result);
            }
        });
    }
};

module.exports = render_pages;