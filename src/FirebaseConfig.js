// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCakTqsJNozn4KZE6XjVYebxgxy5xHzCUY",
    authDomain: "ecom-4a2c9.firebaseapp.com",
    projectId: "ecom-4a2c9",
    storageBucket: "ecom-4a2c9.appspot.com",
    messagingSenderId: "118805042997",
    appId: "1:118805042997:web:20a0f0b0be28c19ecc5e7c"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)