import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuKcDnLe8NRWYF8FFfIJ5ECksss31aqq0",
    authDomain: "the-lash-queen.firebaseapp.com",
    databaseURL: "https://the-lash-queen.firebaseio.com",
    projectId: "the-lash-queen",
    storageBucket: "the-lash-queen.appspot.com",
    messagingSenderId: "578158118863",
    appId: "1:578158118863:web:9b76b6e58c3339bc6c74ba",
    measurementId: "G-DD7WWCTW0R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export const storage = firebaseApp.storage();
export const auth = firebaseApp.auth();
export default db;