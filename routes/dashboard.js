var express = require('express');
var router = express.Router();
var userService = require('../user_service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    res.render('dashboard', {
      signedIn: signedIn,
      title: 'Dashboard - Profile',
      styles: ['index.css'],
      javascript: ['dashboard.js']
    });
  } else {
    res.redirect('/');
  }
});

router.get('/menus', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    res.render('menus', {
      signedIn: signedIn,
      title: 'Dashboard - Menus',
      styles: ['index.css'],
      javascript: ['dashboard.js']
    });
  } else {
    res.redirect('/');
  }
});

router.get('/tables', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    res.render('tables', {
      signedIn: signedIn,
      title: 'Dashboard - Tables',
      styles: ['index.css'],
      javascript: ['dashboard.js']
    });
  } else {
    res.redirect('/');
  }
});

router.get('/settings', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    res.render('settings', {
      signedIn: signedIn,
      title: 'Dashboard - Settings',
      styles: ['index.css'],
      javascript: ['dashboard.js']
    });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
