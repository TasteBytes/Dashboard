var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('auth/register', { title: 'register', styles: ['auth.css'] });
});

module.exports = router;
