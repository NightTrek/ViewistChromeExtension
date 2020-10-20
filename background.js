
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
chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});


function initApp() {
    // Listen for auth state changes.
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('User state change detected from the Background script of the Chrome Extension:', user);
    });
  }
  
  window.onload = function() {
    initApp();
  };