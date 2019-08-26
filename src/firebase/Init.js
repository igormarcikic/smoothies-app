import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAN6dvDg72K142wItnDCU1w2BGTqbqYQeg",
    authDomain: "test-smoothie-app.firebaseapp.com",
    databaseURL: "https://test-smoothie-app.firebaseio.com",
    projectId: "test-smoothie-app",
    storageBucket: "",
    messagingSenderId: "478380093841",
    appId: "1:478380093841:web:3fed390c9eda64c9"
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()