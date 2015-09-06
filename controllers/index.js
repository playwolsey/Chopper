/*
 * @desc index controllers
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @createTime 2015-08-26
 */



var React = require('react');
var JSX = require('node-jsx').install();

//TweetsApp = require('./components/TweetsApp.react'),
//Tweet = require('./models/Tweet');


var index = function(req, res) {
    res.render('index/index', {
        message: 'markup',
        code: 0
    });
};


exports.index = index;
