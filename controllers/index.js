var index = function(req, res) {
    res.render('index/index', {
        title: 'index',
        message: 'from server'
    });
}; 

exports.index = index;
