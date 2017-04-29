var express = require('express');
var router = express.Router();
var userService = require('../user_service');

/* GET home page. */
router.get('/', function(req, res, next) {
    var signedIn = false;
    if (userService.firebase.auth().currentUser != null) {
        signedIn = true;
    }
    res.render('index', {
        signedIn: signedIn,
        logout: userService.signOut,
        title: 'TasteBytes',
        styles: ['index.css'],
        javascript: ['menus.js'],
    });
});

module.exports = router;
