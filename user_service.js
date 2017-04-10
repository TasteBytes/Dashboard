var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyBrJDvsp_4dcQ8J5YJrFfQwI3-xHQnKGjs",
  authDomain: "tastebytes-e421e.firebaseapp.com",
  databaseURL: "https://tastebytes-e421e.firebaseio.com",
  projectId: "tastebytes-e421e",
  storageBucket: "tastebytes-e421e.appspot.com",
  messagingSenderId: "240649605064"
};

firebaseRef = firebase.initializeApp(config);
var auth = firebase.auth();
var rootRef = firebase.database().ref();

function createUser(email, password) {

  createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    callback(error);
  });
}


function signInUser(email, password, callback) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    callback(error);
  });
}

module.exports = {

	addUser : createUser,
	authenticate : signInUser

}
