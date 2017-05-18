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

/* GET users listing. */
router.get('/', function(req, res, next) {
    var signedIn = false;
    // if (userService.firebase.auth().currentUser != null) {
        res.render('dashboard', {
            signedIn: signedIn,
            title: 'Dashboard - Profile',
            styles: ['profile.css'],
            javascript: ['profile.js']
        });
    // } else {
    //     res.redirect('/');
    // }
});

router.get('/menus', function(req, res, next) {
    var signedIn = false;
    var menus;
    if (userService.firebase.auth().currentUser != null) {
        getMenus()
            .then(menus => {
                res.render('menus', {
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
                res.render('tables', {
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
    if (userService.firebase.auth().currentUser != null) {
        res.render('settings', {
            signedIn: signedIn,
            title: 'Dashboard - Settings',
            styles: [],
            javascript: []
        });
    } else {
        res.redirect('/');
    }
});


module.exports = router;
