var express = require('express');
var router = express.Router();
var userService = require('../user_service');

async function getMenus(){
  var menus;
  await userService.firebase.database().ref(`/users/${userService.firebase.auth().currentUser.uid}/menus`)
  .once('value')
  .then((snapshot) => {
    menus = snapshot.val();
  })
  return menus;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    res.render('dashboard', {
      signedIn: signedIn,
      title: 'Dashboard - Profile',
      styles: ['index.css'],
      javascript: ['dashboard.js']
    });
  } else {
    res.redirect('/');
  }
});

router.get('/menus', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    var menus = getMenus();
    menus.then(menus => {
      // This is the full menu node. Break it down and sent it to the template
      console.log(menus)
      menus.forEach(console.log)
    })
    res.render('menus', {
      signedIn: signedIn,
      title: 'Dashboard - Menus',
      styles: ['index.css'],
      javascript: ['dashboard.js']
    });
  } else {
    res.redirect('/');
  }
});

router.get('/tables', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    res.render('tables', {
      signedIn: signedIn,
      title: 'Dashboard - Tables',
      styles: ['index.css'],
      javascript: ['dashboard.js']
    });
  } else {
    res.redirect('/');
  }
});

router.get('/settings', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null){
    res.render('settings', {
      signedIn: signedIn,
      title: 'Dashboard - Settings',
      styles: ['index.css'],
      javascript: ['dashboard.js']
    });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
