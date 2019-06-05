var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const config = require('./modules/config');
const auth = require('./modules/auth');

var indexRouter = require('./routes/index');
var bankRouter = require('./routes/bank/index');
var bankLoginRouter = require('./routes/bank/login');
var bankLogoutRouter = require('./routes/bank/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(config.secret));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: config.secret,
	resave: false,
	saveUninitialized: false
}));

app.use(auth);

app.use('/', indexRouter);
app.use('/bank', bankRouter);
app.use('/bank/login', bankLoginRouter);
app.use('/bank/logout', bankLogoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
