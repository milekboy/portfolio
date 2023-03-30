
  // Import the functions you need from the SDKs you need
 import firebase from 'firebase/app'
  import 'firebase/firestore';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaJB1gVX5QevBTz22_GS0EiqHvAEQmluM",
    authDomain: "portfolio-f3632.firebaseapp.com",
    databaseURL: "https://portfolio-f3632-default-rtdb.firebaseio.com",
    projectId: "portfolio-f3632",
    storageBucket: "portfolio-f3632.appspot.com",
    messagingSenderId: "837841161238",
    appId: "1:837841161238:web:eda8959176027228ff7937",
    measurementId: "G-8WMH6J46GF"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const firestore = app.firestore();
  
  export {app, firestore}

