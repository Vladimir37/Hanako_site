function render(file) {
    return function(req, res, next) {
        res.render(file);
    }
};

module.exports = render;