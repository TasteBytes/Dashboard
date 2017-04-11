var express = require('express');
var router = express.Router();
var userService = require('../user_service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
      signedIn = true;
  }
      res.render('features', {
        signedIn: signedIn,
        title: 'TasteBytes - Features',
        styles: ['index.css'],
    });
});

module.exports = router;
