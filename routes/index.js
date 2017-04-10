var express = require('express');
var router = express.Router();
var os = require('os');

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
    res.render('index', {
        title: 'TasteBytes',
        styles: ['index.css'],
        javascript: ['menus.js'],
        hostOS: hostOS
    });
});

module.exports = router;
