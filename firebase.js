
  
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,  onAuthStateChanged,
  signOut } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "<enter your name>",
  authDomain: "<enter your name>",
  projectId: "<enter your name>",
  storageBucket: "<enter your name>",
  messagingSenderId: "715132384694",
  appId: "<enter your name>",
  measurementId: "<enter your name>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword ,   onAuthStateChanged,
  signOut}