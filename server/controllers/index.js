/*
 * @desc index controllers
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @createTime 2015-08-26
 */



import React from 'react';
import jsx from 'node-jsx';

const JSX = jsx.install();
//TweetsApp = require('./components/TweetsApp.react'),
//Tweet = require('./models/Tweet');


export {
    index(req, res) => {
        //var markup = React.renderComponentToString(
        //    TweetsApp({
        //        tweets: tweets
        //    })
        //);

        res.render('index/index', {
            markup: markup
        });
    }
};

