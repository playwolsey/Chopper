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
var nodemon = require('gulp-nodemon');
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

gulp.task('watch', function() {
    gulp.watch('public/javascripts/**/*.js', ['build']);
    gulp.watch('public/css/**/*.less', ['build']);
    gulp.watch('components/**/*.jsx', ['build']);
    gulp.watch('components/**/*.less', ['build']);
});

gulp.task('run', function(cb) {
    var started = false;

    nodemon({
        execMap: {
          js: 'node'
        },
        script: 'server.js'
    })
    .on('restart', ['watch'])
    .on('restart', function() {
        if (!started) {
			cb();
			started = true; 
		} 
        console.log('Restarted!');
    });
});
