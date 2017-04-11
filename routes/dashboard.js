var express = require('express');
var router = express.Router();
var userService = require('../user_service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    res.render('dashboard', {
      signedIn: signedIn,
      title: 'TasteBytes - Dashboard',
      styles: ['index.css'],
    });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
