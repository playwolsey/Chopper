/*
 * @desc index controllers
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @createTime 2015-08-26
 */

//var JSX = require('node-jsx').install(),
var index = function(req, res) {
    res.render('index/index', {
        message: 'from server'
    });
}; 

exports.index = index;
