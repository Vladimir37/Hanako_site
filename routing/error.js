function page_not_found(req, res, next) {
    res.status(404);
    res.render('errors/e404');
};

module.exports = page_not_found;