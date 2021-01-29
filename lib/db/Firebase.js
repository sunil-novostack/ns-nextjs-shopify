
import firebase from 'firebase';
/*
var firebaseConfig = {
    apiKey: "AIzaSyBbUA2xgcJiZWorSzWoVzIglO9RkisoQF8",
    authDomain: "react-uclab.firebaseapp.com",
    databaseURL: "https://react-uclab-default-rtdb.firebaseio.com",
    projectId: "react-uclab",
    storageBucket: "react-uclab.appspot.com",
    messagingSenderId: "681126830705",
    appId: "1:681126830705:web:f6ee76f1b0055751ee31d0"
  };
*/
var firebaseConfig = {
    apiKey: "AIzaSyDTZqgjzS3SmVJOGR1n02MeLEDuH6jZ_8Q",
    authDomain: "shopify-app-testing-301819.firebaseapp.com",
    projectId: "shopify-app-testing-301819",
    storageBucket: "shopify-app-testing-301819.appspot.com",
    messagingSenderId: "44519486897",
    appId: "1:44519486897:web:841722600cf51c22dd3990"
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
  