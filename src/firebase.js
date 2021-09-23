import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCOVBgC_j2dus1XJxXg-RT6tCnfWqj_zO8",
  authDomain: "fir-c4782.firebaseapp.com",
  projectId: "fir-c4782",
  storageBucket: "fir-c4782.appspot.com",
  messagingSenderId: "775151954086",
  appId: "1:775151954086:web:4ea3b89d67ee11ed0bec67",
  measurementId: "G-3DFKC4ZP3K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
