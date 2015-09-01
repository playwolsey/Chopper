/*
 * @desc index controllers
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @createTime 2015-08-26
 */



import jsx = from 'node-jsx';
import React from 'react';

const JSX = jsx.install();
//TweetsApp = require('./components/TweetsApp.react'),
//Tweet = require('./models/Tweet');

export {
    index(req, res) => {
        res.render('index/index', {
            message: 'from server'
        });
    }
};
