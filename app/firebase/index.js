import firebase from 'firebase';

// Initialize Firebase
try {

  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET /*,
    messagingSenderId: "890877468626" */
  };

  firebase.initializeApp(config);
  
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
