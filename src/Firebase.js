
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBmXkSJD5VmR3rwMcDLp2aEqnO-cCZKi9U",
  authDomain: "movie-app-c938b.firebaseapp.com",
  projectId: "movie-app-c938b",
  storageBucket: "movie-app-c938b.appspot.com",
  messagingSenderId: "831209927344",
  appId: "1:831209927344:web:d19c30da7b7c6a5ef5c175",
  measurementId: "G-FJ2RECRRBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const db=getFirestore(app)

export {app,auth,db}