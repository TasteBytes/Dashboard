var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('auth/login', { title: 'TasteBytes - Login', styles: ['auth.css']});
});


module.exports = router;
