import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDEOb3bbQX2g64qQJIKOwolWybDNQqOzzA",
  authDomain: "reacttodotutorial.firebaseapp.com",
  databaseURL: "https://reacttodotutorial.firebaseio.com",
  storageBucket: "reacttodotutorial.appspot.com",
  messagingSenderId: "890877468626"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app:{
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Vlad',
    age: 31
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log("child_added", snapshot.key, snapshot.val());
});


todosRef.push({
  todo: 'Learning learning...'
});

todosRef.push({
  todo: 'have some juice...'
});
