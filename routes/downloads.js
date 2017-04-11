var express = require('express');
var router = express.Router();
var userService = require('../user_service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
      signedIn = true;
  }
    res.render('downloads', {
        signedIn: signedIn,
        title: 'TasteBytes - Downloads',
        styles: ['index.css'],
        javascript: ['dropdown.js']
    });
});

module.exports = router;
