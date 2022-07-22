// import firebase from 'firebase'

import {  initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAN6Zv9OJQT29Rmr9ZxPN559wPQPISP4pI",
    authDomain: "trashnet-poc.firebaseapp.com",
    projectId: "trashnet-poc",
    storageBucket: "trashnet-poc.appspot.com",
    messagingSenderId: "380784641667",
    appId: "1:380784641667:web:4b43058deb7581995cfdb6",
    measurementId: "G-78P1ZC7S5G"
  };
  
// const firebaseApp=firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const db=firebase.firestore();
const db = getFirestore(app);

export default db;