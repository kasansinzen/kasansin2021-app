import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSeiy869hYxTVW1nsVAozutthjMzrwQQA",
  authDomain: "kasansin-3e31b.firebaseapp.com",
  projectId: "kasansin-3e31b",
  storageBucket: "kasansin-3e31b.appspot.com",
  messagingSenderId: "841915675370",
  appId: "1:841915675370:web:917ff6ee582772e3bbdd93",
  measurementId: "G-Z42LZQ5GR2"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;