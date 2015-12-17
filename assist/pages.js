function render_pages(req, res, next) {
    var lang = req.params.lang;
    var article = req.params.article;
    if(lang && article) {
        res.render('main/' + lang + '/' + article);
    }
    else {
        var index_lang = lang || article;
        res.render('main/' + index_lang + '/index');
    }
};

module.exports = render_pages;