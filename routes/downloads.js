var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('downloads', {
        title: 'TasteBytes - Downloads',
        styles: ['index.css'],
        javascript: ['dropdown.js']
    });
});

module.exports = router;
