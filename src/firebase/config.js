
//* ARCHIVO DE CONFIGURACION DE FIREBASE 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvZOfc6jQZ8AvRQbuVufH_L4N1h4_-oCM",
  authDomain: "igniweb-1a886.firebaseapp.com",
  projectId: "igniweb-1a886",
  storageBucket: "igniweb-1a886.appspot.com",
  messagingSenderId: "523778799220",
  appId: "1:523778799220:web:9cfcf8842c665434e0c321",
  measurementId: "G-CN2EJ65EWJ"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FireBaseDB = getFirestore( Firebaseapp);
const analytics = getAnalytics(Firebaseapp);