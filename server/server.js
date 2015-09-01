import express from 'express';
import engine from 'express-dot-engine';
import path from 'path';
import http from 'http';
import io from 'socket.io';
import favicon  from 'serve-favicon';
import logger  from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config/db.config';

const APP = express();
const HTTP = http.Server(APP);
const IO = io(HTTP);

APP.engine('dot', engine.__express);
APP.set('views', path.join(__dirname, 'views'));
APP.set('views engine', 'dot');

APP.use(favicon(__dirname + 'favicon.ico'));
APP.use(logger('dev'));
APP.use(cookieParser());
APP.use(express.static(path.join(__dirname, './client/views')));

APP.use('/', routes);

APP.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (APP.get('env') === 'development') {
    APP.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('common/error', {
            message: err.message,
            error: err
        });
    });
}

APP.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('common/error', {
        message: err.message,
        error: {}
    });
});

APP.set('port', process.env.PORT || 2998);

let server = http.listen(app.get('port'), () => {
    console.log('Chopper server is listening on port ' + server.address().port);
});

export default APP;
