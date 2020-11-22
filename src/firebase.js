import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBCsZpK8bDzoPq38RHqSyF6MbIFAC9WLnY",
  authDomain: "facebook-clone-d6968.firebaseapp.com",
  databaseURL: "https://facebook-clone-d6968.firebaseio.com",
  projectId: "facebook-clone-d6968",
  storageBucket: "facebook-clone-d6968.appspot.com",
  messagingSenderId: "433685709386",
  appId: "1:433685709386:web:a1a1e2104a498274e81cb3",
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
