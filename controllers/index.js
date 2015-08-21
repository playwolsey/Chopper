var index = function(req, res) {
    res.render('index/index', {
        title: 'index'
    });
}; 

exports.index = index;
