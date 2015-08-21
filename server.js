var express = require('express');
var engine = require('express-dot-engine');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var config = require('./config/config.db');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

 
app.engine('dot', engine.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'dot');


app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', routes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('common/error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('common/error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 2998);

var server = http.listen(app.get('port'), function() {
    console.log('Chopper server is listening on port ' + server.address().port);
});

module.exports = app;
