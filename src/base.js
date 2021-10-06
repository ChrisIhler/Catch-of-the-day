import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOqTAq5kNNSXw6gFlR6sdK5M_JmAJUF2Q",
  authDomain: "catch-of-the-day-chris-ihler.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-chris-ihler-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-chris-ihler",
  storageBucket: "catch-of-the-day-chris-ihler.appspot.com",
  messagingSenderId: "841445454396",
  appId: "1:841445454396:web:6630e65db30b2f0b054939",
  measurementId: "G-0TD8R5BWS1",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
