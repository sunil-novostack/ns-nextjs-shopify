
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBbUA2xgcJiZWorSzWoVzIglO9RkisoQF8",
    authDomain: "react-uclab.firebaseapp.com",
    databaseURL: "https://react-uclab-default-rtdb.firebaseio.com",
    projectId: "react-uclab",
    storageBucket: "react-uclab.appspot.com",
    messagingSenderId: "681126830705",
    appId: "1:681126830705:web:f6ee76f1b0055751ee31d0"
  };
  
  // Initialize Firebase
  try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    console.log(err)
  }
  const filebase = firebase; 
  export default filebase;
  //filebase.database().ref();
  