// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC0KZTGn2bMt4w6s0kjMl5I0QcmJUCGWqM",
  authDomain: "organify-cb4d8.firebaseapp.com",
  projectId: "organify-cb4d8",
  storageBucket: "organify-cb4d8.appspot.com",
  messagingSenderId: "828680303895",
  appId: "1:828680303895:web:33c1efe52be9e66a0e3352"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)