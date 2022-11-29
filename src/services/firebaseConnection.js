import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoZNpXJA54ab3G6Mbl56QEySGjx05winQ",
  authDomain: "teste-ea7de.firebaseapp.com",
  projectId: "teste-ea7de",
  storageBucket: "teste-ea7de.appspot.com",
  messagingSenderId: "461398049427",
  appId: "1:461398049427:web:f8e7899d8f2e10bf400366",
  measurementId: "G-GJLPK1H4M0",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
