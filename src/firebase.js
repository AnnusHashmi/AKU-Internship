import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBy6iRuXh1yWZyWSUXu51uSs0s_CBKxBAI",
    authDomain: "akuinternship.firebaseapp.com",
    databaseURL: "https://akuinternship.firebaseio.com",
    projectId: "akuinternship",
    storageBucket: "akuinternship.appspot.com",
    messagingSenderId: "572050059621",
    appId: "1:572050059621:web:23203684c34f57d75a718c",
    measurementId: "G-5PDG72327F"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();