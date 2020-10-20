// Firebase App (the core Firebase SDK) is always required and must be listed first
// const firebase = require("firebase/app");
// import firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics


var firebaseConfig = {
  apiKey: "AIzaSyAldkm1tVDNqUg4QuigwbLsuNJjSpegKAk",
  authDomain: "socialreading-5fdfb.firebaseapp.com",
  databaseURL: "https://socialreading-5fdfb.firebaseio.com",
  projectId: "socialreading-5fdfb",
  storageBucket: "socialreading-5fdfb.appspot.com",
  messagingSenderId: "768260463114",
  appId: "1:768260463114:web:a699923d4ab710cc8d5df3",
  measurementId: "G-SZKJC34ZVR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
var db = firebase.firestore();


chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
  let credential = firebase.auth.GoogleAuthProvider.credential(null, token);
  firebase.auth().signInWithCredential(credential);
  console.log("successfull login");
});


let addArticle = document.getElementById('addArticle');
let trackDomain = document.getElementById('TrackDomain');


//768260463114-dfqhpjuhfhg48rj3ahgd806e2hpgvic3.apps.googleusercontent.com







addArticle.addEventListener("click", (event)=>{
  
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    console.log({
      title:tabs[0].title,
      url:tabs[0].url,
    })
  //   db.collection("ReadingListItems").add(
  //     {
  //       title:tabs[0].title,
  //       url:tabs[0].url,
  //     }
  //   ).then((docRef)=>{
  //     console.log("document written with ID: "+docRef.id)
  //   }).catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });
    // use `url` here inside the callback because it's asynchronous!
  });
  
})
