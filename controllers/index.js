var index = function(req, res) {
    res.render('index/index', {
        message: 'from server'
    });
}; 

exports.index = index;
