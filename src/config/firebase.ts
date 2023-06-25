import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArxtHx6vPPsODj0QyhNrM9LghCzNhuGbE",
  authDomain: "carefinder-6efb1.firebaseapp.com",
  projectId: "carefinder-6efb1",
  storageBucket: "carefinder-6efb1.appspot.com",
  messagingSenderId: "400465092540",
  appId: "1:400465092540:web:d76d6dd1601b52f9cd15b9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)