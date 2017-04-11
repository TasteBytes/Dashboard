var express = require('express');
var router = express.Router();
var os = require('os');
var userService = require('../user_service');

var getHostOS = (() => {
  var type = os.type();
    return {
        os: type,
        download: `https://github.com/${type}/downloadLink`
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
    var hostOS = getHostOS();
    var signedIn = false;
    if (userService.firebase.auth().currentUser != null){
        signedIn = true;
    }
    res.render('index', {
        signedIn: signedIn,
        logout: userService.signOut,
        title: 'TasteBytes',
        styles: ['index.css'],
        javascript: ['menus.js'],
        hostOS: hostOS
    });
});

module.exports = router;
