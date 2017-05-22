var express = require('express');
var router = express.Router();
var userService = require('../user_service');
var app = express();

async function getMenus() {
  var menus;
  await userService.firebase.database().ref(`/users/${userService.firebase.auth().currentUser.uid}/menus`)
    .once('value')
    .then((snapshot) => {
      menus = snapshot.val();
    })
  return menus
};

async function getTables() {
  var tables;
  await userService.firebase.database().ref(`/users/${userService.firebase.auth().currentUser.uid}/tables`)
    .once('value')
    .then((snapshot) => {
      tables = snapshot.val();
    })
  return tables
};

async function getProfileImageURL() {
  var profileURL;
  file = userService.firebaseStorage.file(`${userService.firebase.auth().currentUser.uid}/profile_image.jpg`);
  await file.getSignedUrl({
    action: 'read',
    expires: '03-09-2491'
  }).then(signedUrls => {
    // signedUrls[0] contains the file's public URL
    profileURL = signedUrls[0];
  });
  return profileURL;
}

async function getCoverImageURL() {
  var coverURL;
  file = userService.firebaseStorage.file(`${userService.firebase.auth().currentUser.uid}/cover_image.jpg`);
  await file.getSignedUrl({
    action: 'read',
    expires: '03-09-2491'
  }).then(signedUrls => {
    // signedUrls[0] contains the file's public URL
    coverURL = signedUrls[0];
  });
  return coverURL;
}

async function getProfileNode() {
  var imageObject = {}
  let [profileURL, coverURL, menusNode] = await Promise.all([getProfileImageURL(), getCoverImageURL(), getMenus()]);
  imageObject.profileURL = profileURL;
  imageObject.coverURL = coverURL;
  imageObject.menus = menusNode;
  return imageObject
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null) {
    // console.log(`profileURL is ${getProfileURL().then(console.log)}`);
    // var profileURL;s
    getProfileNode().then(profileNode => {
      res.render('dashboard/dashboard', {
        signedIn: signedIn,
        title: 'Dashboard - Profile',
        profileImage: profileNode.profileURL,
        coverImage: profileNode.coverURL,
        menus: profileNode.menus,
        styles: ['profile.css'],
        javascript: ['profile.js']
      });

    })
  } else {
    res.redirect('/');
  }

});

router.get('/menus', function(req, res, next) {
  var signedIn = false;
  var menus;
  if (userService.firebase.auth().currentUser != null) {
    getMenus()
      .then(menus => {
        res.render('dashboard/menus', {
          signedIn: signedIn,
          menus: menus,
          title: 'Dashboard - Menus',
          styles: ['dashboard.css'],
          javascript: ['menus.js']
        })
      })
  } else {
    res.redirect('/');
  }
});

router.get('/tables', function(req, res, next) {
  var signedIn = false;
  if (userService.firebase.auth().currentUser != null) {
    getTables()
      .then(tables => {
        res.render('dashboard/tables', {
          signedIn: signedIn,
          tables: tables,
          title: 'Dashboard - Tables',
          styles: ['dashboard.css'],
          javascript: []
        });

      })
  } else {
    res.redirect('/');
  }
});

router.get('/settings', function(req, res, next) {
  var signedIn = false;
  // if (userService.firebase.auth().currentUser != null) {
  res.render('dashboard/settings', {
    signedIn: signedIn,
    title: 'Dashboard - Settings',
    styles: ['dashboard.css', 'settings.css'],
    javascript: ['settings.js']
  });
  // } else {
  //     res.redirect('/');
  // }
});


module.exports = router;
