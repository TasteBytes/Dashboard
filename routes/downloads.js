var express = require('express');
var router = express.Router();
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
    }
});



/* GET users listing. */
router.get('/', function(req, res, next) {
  var signedIn = false;
  var hostOS = getHostOS(useragent.parse(req.headers['user-agent']));
  if (userService.firebase.auth().currentUser != null){
      signedIn = true;
  }
    res.render('downloads', {
        signedIn: signedIn,
        hostOS: hostOS,
        title: 'TasteBytes - Downloads',
        styles: ['index.css']
    });
});

module.exports = router;
