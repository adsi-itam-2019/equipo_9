import * as firebase from 'firebase'

// Initialize Firebase
if (!firebase.apps.length) {
  var config = {
    apiKey: "AIzaSyAkHZxLOePzLLGdOLfggqE7C2FH-DpQXgs",
    authDomain: "rentizapan.firebaseapp.com",
    databaseURL: "https://rentizapan.firebaseio.com",
    projectId: "rentizapan",
    storageBucket: "rentizapan.appspot.com",
    messagingSenderId: "31606290127",
    appId: "1:31606290127:web:e297d2afb2a6b23d"
  };

  firebase.initializeApp(config);
  
}