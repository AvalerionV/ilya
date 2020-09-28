// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBuScyqXoG-NuThzkCKEwTZSpnYd4FBjHQ",
    authDomain: "ilya-dev-77fa4.firebaseapp.com",
    databaseURL: "https://ilya-dev-77fa4.firebaseio.com",
    projectId: "ilya-dev-77fa4",
    storageBucket: "ilya-dev-77fa4.appspot.com",
    messagingSenderId: "365708444953",
    appId: "1:365708444953:web:9e7336681e118853573188",
    measurementId: "G-GDLP9BFY6C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();