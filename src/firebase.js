import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXX.firebaseapp.com",
  projectId: "XXXXXXXXXXXXXXXXXXXXXXr",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default firebase.firestore();
