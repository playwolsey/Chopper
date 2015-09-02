/**
 * @desc gulpfile.js
 * @author
 * @date Created on 2015-09-01.
 */

'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var path = require('path');

var config = require('./config/webpack.config');

//var config = {
//    entry: path.resolve(__dirname, 'server/server.js'),
//    output: {
//        path: path.resolve(__dirname, 'server-dist'),
//        filename: '[name].bundle.js'
//    },
//    module: {
//        loaders: [
//            {
//                test: /\.js?$/,
//                exclude: path.resolve(__dirname, 'node_modules'),
//                loader: 'babel'
//            }
//        ]
//    }
//};
//gulp.task('build-backend', function(done) {
//    webpack(config).run(function(err, stats) {
//        if (err) {
//            console.log('Error', err);
//        } else {
//            console.log(stats.toString());
//        }
//        done();
//    });
//});

gulp.task('build', function () {
    gulp.src('public')
        .pipe(webpack(config))
        .pipe(gulp.dest('public/build'));
});


//gulp.task('publish-css', function () {
//  return gulp.src(['./css/main.css', './css/view.css'])
//    .pipe(concat('app.css'))
//    .pipe(shrink())
//    .pipe(rev())
//    .pipe(gulp.dest('./build'))
//    .pipe(qn({
//      qiniu: qiniu,
//      prefix: 'gmap'
//    }))
//    .pipe(rev.manifest())
//    .pipe(gulp.dest('./build/rev/css'));
//});

gulp.task('watch', function () {
    gulp.watch('./css/*.css', ['css']);
    gulp.watch('./js/*.js', ['js']);
});

//gulp.task('publish', function (callback) {
//  runSequence(
//    ['publish-css', 'publish-js'],
//    'publish-html',
//    callback);
//});
