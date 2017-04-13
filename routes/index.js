var express = require('express');
var router = express.Router();
var os = require('os');
var userService = require('../user_service');
var useragent = require('useragent');


var getHostOS = ((agent) => {
    var osType = agent.os.toString();
    if (osType.includes('Ubuntu')) {
      var os = 'Linux'
      var osRelease = ''
    } else if (osType.includes('Mac OS')){
      var os = 'Mac'
      var osRelease = ''
    } else if (osType.includes('Windows')){
      var os = 'Windows'
      var osRelease = ''
    }
    return {
        os: os,
        download: osRelease
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
    var hostOS = getHostOS(useragent.parse(req.headers['user-agent']));
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
        hostOS: hostOS
    });
});

module.exports = router;
