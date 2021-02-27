import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyBNb23O4z8yWXxX1iwl2yRn5sMHsGHS-hE",
  authDomain: "mapapp-d730f.firebaseapp.com",
  projectId: "mapapp-d730f",
  storageBucket: "mapapp-d730f.appspot.com",
  messagingSenderId: "105754721807",
  appId: "1:105754721807:web:2ab0ea67f376cab085ed7a",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
