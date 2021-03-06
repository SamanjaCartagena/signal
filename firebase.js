import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD6uxpadCKBZwQzOAqdGf0YN7h48dLZcU",
    authDomain: "husers-ec8ea.firebaseapp.com",
    projectId: "husers-ec8ea",
    storageBucket: "husers-ec8ea.appspot.com",
    messagingSenderId: "238592331743",
    appId: "1:238592331743:web:dfbc46be65b2425bd57e6a",
    measurementId: "G-4B4KV0MPX4"
  };

  let app;
  if(firebase.apps.length === 0){
      app=firebase.initializeApp(firebaseConfig)
  }
  else{
    app= firebase.app();
  }
  const db = app.firestore();
  const auth= firebase.auth();
  export { db, auth};