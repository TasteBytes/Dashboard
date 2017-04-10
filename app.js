var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var userService = require('./user_service');

var index = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/register');
var features = require('./routes/features');
var downloads = require('./routes/downloads');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/downloads', downloads);
app.use('/features', features);
app.use('/login', login);
app.use('/register', register);
// app.user('/dashboard', dashboard)


//Create a new user
app.post('/createuser', function(req, res) {
  var UserName = req.body['name']
  var UserEmail = req.body['email'];
	var UserPass = req.body['password'];
	userService.addUser(UserEmail, UserPass,
		function(error, uid) {
			if (error) {
				return res.status(500).send(error);
			} else {
				// return res.status(201).send({uid : uid});
        return res.redirect('/downloads');
		}
	});
});


//Login the user
app.post('/userlogin', function(req, res) {
  var UserEmail = req.body['email'];
	var UserPass = req.body['password'];
	userService.authenticate(UserEmail, UserPass,
		function(error, uid) {

			if (error) {
				return res.status(500).send(error);
			} else {
				// return res.status(201).send({uid : uid});
        return res.redirect('/downloads');
		}
	});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
