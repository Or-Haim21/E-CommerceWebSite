// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYKMHMlY5HQ1nk14G0n_TEsEyYDRxJKi0",
  authDomain: "e-commerce-web-site-69911.firebaseapp.com",
  projectId: "e-commerce-web-site-69911",
  storageBucket: "e-commerce-web-site-69911.appspot.com",
  messagingSenderId: "1001262104483",
  appId: "1:1001262104483:web:50e52b43d9bf2c56c66416"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db as a default export
export default db;
