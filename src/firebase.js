import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRjdppDnrZMNjBwoSLkI-nzNvtu0qWb3I",
  authDomain: "fireact-chatter.firebaseapp.com",
  projectId: "fireact-chatter",
  storageBucket: "fireact-chatter.appspot.com",
  messagingSenderId: "262918477135",
  appId: "1:262918477135:web:f20e497b95c2184cd0a13a"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default firebase.firestore();
