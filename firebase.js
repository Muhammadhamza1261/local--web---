
  
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "<enter your name>",
//   authDomain: "<enter your name>",
//   projectId: "<enter your name>",
//   storageBucket: "<enter your name>",
//   messagingSenderId: "715132384694",
//   appId: "<enter your name>",
//   measurementId: "<enter your name>"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCfZQbPUqS4_A-9KEjivxc-SClQDBegNU8",
  authDomain: "assignment-smit-c523a.firebaseapp.com",
  projectId: "assignment-smit-c523a",
  storageBucket: "assignment-smit-c523a.firebasestorage.app",
  messagingSenderId: "715132384694",
  appId: "1:715132384694:web:96a70e8990a18af5ccbd17",
  measurementId: "G-KFSHPMQZMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword}