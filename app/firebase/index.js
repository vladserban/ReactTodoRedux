import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyDEOb3bbQX2g64qQJIKOwolWybDNQqOzzA",
    authDomain: "reacttodotutorial.firebaseapp.com",
    databaseURL: "https://reacttodotutorial.firebaseio.com",
    storageBucket: "reacttodotutorial.appspot.com",
    messagingSenderId: "890877468626"
  };

  firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
