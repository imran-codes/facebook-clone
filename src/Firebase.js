import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOdA_pOGAq09lFoQJfj83JwLoqEDEX8yw",
  authDomain: "facebook-clone-85d1c.firebaseapp.com",
  projectId: "facebook-clone-85d1c",
  storageBucket: "facebook-clone-85d1c.appspot.com",
  messagingSenderId: "518164287352",
  appId: "1:518164287352:web:d7c8908355de4f4ecec28d",
  measurementId: "G-4299VWDCJY"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;