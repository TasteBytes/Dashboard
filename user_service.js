var fs = require('fs');
var storage = require('@google-cloud/storage')
var gcsStorage = storage({
  projectId: 'tastebytes-e421e',
  keyFilename: 'service-account.json'
});
const gcsStorageRef = gcsStorage.bucket('tastebytes-e421e.appspot.com');

const firebase = require('firebase');
const config = {
  apiKey: "AIzaSyBrJDvsp_4dcQ8J5YJrFfQwI3-xHQnKGjs",
  authDomain: "tastebytes-e421e.firebaseapp.com",
  databaseURL: "https://tastebytes-e421e.firebaseio.com",
  projectId: "tastebytes-e421e",
  storageBucket: "tastebytes-e421e.appspot.com",
  messagingSenderId: "240649605064"
};

firebase.initializeApp(config);
const auth = firebase.auth();


// Takes UserID, Name and email
// Returns nothing
// Uploads some basic data to the user account database ref
function writeUserData(userID, name, email) {
  console.log("updating a new user profile")
  firebase.database().ref('users/' + userID).set({
    fullname: name,
    email: email,
  });
  firebase.database().ref('users/' + userID + '/menus').set({
    "Breakfast": {
      "Appetizers": [{
        "Name": "AppetizerName",
        "Description": "Description",
        "Price": 1.50
      }, {
        "Name": "Appetizer2Name",
        "Description": "Description2",
        "Price": 1.50
      }],
    },
    "Lunch": {
      "Appetizers": [{
        "Name": "AppetizerName",
        "Description": "Description",
        "Price": 1.50
      }, {
        "Name": "Appetizer2Name",
        "Description": "Description2",
        "Price": 1.50
      }, {
        "Name": "Appetizer3Name",
        "Description": "Description3",
        "Price": 1.50
      }],
      "Sides": [{
        "Name": "SidesName",
        "Description": "Description",
        "Price": 1.50
      }, {
        "Name": "SidesName",
        "Description": "Description",
        "Price": 1.50
      }, {
        "Name": "SidesName",
        "Description": "Description",
        "Price": 1.50
      }],
      "Sandwiches": [{
        "Name": "SidesName",
        "Description": "Description",
        "Price": 1.50
      }, {
        "Name": "SidesName",
        "Description": "Description",
        "Price": 1.50
      }],
      "Pasta": [{
        "Name": "SidesName",
        "Description": "Description",
        "Price": 1.50
      }]
    },
    "Dinner": {
      "Appetizers": [{
        "Name": "AppetizerName",
        "Description": "Description",
        "Price": 1.50
      }, {
        "Name": "Appetizer2Name",
        "Description": "Description2",
        "Price": 1.50
      }]
    }
  });

}

function createUser(name, email, password, callback) {
  auth.createUserWithEmailAndPassword(email, password).then(function(success) {
    writeUserData(auth.currentUser.uid, name, email)
    callback(success.code)
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    callback(error);
  });
}

function signInUser(email, password, callback) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(success) {
    callback(success.code);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    callback(error);
  });
}

function signOutUser(callback) {
  firebase.auth().signOut().then(function(success) { 
    // Sign-out successful.
    callback(success);
  }).catch(function(error) {
    // An error happened.
    callback(error); 
  });
}

function updateRestaurantSettings(restaurantName, address, phoneNumber, email){
  firebase.database().ref('users/' + userID + "/restaurant_settings" ).set({
      full_name : restaurantName,
      Address : address,
      phoneNumber : phoneNumber,
      email : email,
    });
}

function updateAccountSettings(fullName, email){
  firebase.database().ref('users/' + userID + '/account_settings').set({
      phoneNumber : firstName,
      restaurantName : email,
    });
}


function uploadUserProfileImage(userID, file, callback) {
  console.log(`File location is ${file}`);
  if (!file){
    gcsStorageRef.upload(path.join(__dirname, 'public/images/', `default-user.jpg`), { destination: `${userID}/profile_image.jpg` }).then(function(sucess) {
      callback(sucess.code)
    }).catch(function(error) {
      callback(error);
    });
  } else {
    gcsStorageRef.upload(file, { destination: `${userID}/profile_image.jpg` }).then(function(sucess) {
      callback(sucess.code)
    }).catch(function(error) {
      callback(error);
    });
  }
}

function uploadUserCoverImage(userID, file, callback) {
  console.log(`File location is ${file}`);
  gcsStorageRef.upload(file, { destination: `${userID}/cover_image.jpg` }).then(function(sucess) {
    // Try to remove the file from the tmp folder..
    fs.unlink(file);
    callback(sucess.code)
  }).catch(function(error) {
    callback(error);
  });
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // console.log('user is signed in');
    // Can do something here.
  } else {
    // console.log('user is not signed in');
  }
});


module.exports = {
  firebase: firebase,
  firebaseStorage: gcsStorageRef,
  addUser: createUser,
  authenticate: signInUser,
  signOut: signOutUser,
  updateRestaurant: updateRestaurantSettings,
  updateAccount: updateAccountSettings,
  uploadProfile: uploadUserProfileImage,
  uploadCover: uploadUserCoverImage
}
