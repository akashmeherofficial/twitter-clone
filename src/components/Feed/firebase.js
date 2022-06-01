import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsNJQzeNz9d3MdYFS2l_OZsjcVK6GaLQ4",
  authDomain: "twitter-clone-b9f8f.firebaseapp.com",
  projectId: "twitter-clone-b9f8f",
  storageBucket: "twitter-clone-b9f8f.appspot.com",
  messagingSenderId: "838578769794",
  appId: "1:838578769794:web:6106a5f89acd3ade18499b",
  measurementId: "G-XZJQYLEQVN",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default db;
