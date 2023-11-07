
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ_mhIxadgDKji9vG0jPyV7IPAGe5SWWE",
  authDomain: "email-58788.firebaseapp.com",
  databaseURL: "https://email-58788-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "email-58788",
  storageBucket: "email-58788.appspot.com",
  messagingSenderId: "361966386140",
  appId: "1:361966386140:web:fe7078be749ebbcf73ad19"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);