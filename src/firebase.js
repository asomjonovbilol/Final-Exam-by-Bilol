// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // getAuth funksiyasini import qilamiz

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXi7fgFDbYCtqHi0poveYg0Q3UrSwu3Y8",
  authDomain: "fir-70d7b.firebaseapp.com",
  projectId: "fir-70d7b",
  storageBucket: "fir-70d7b.appspot.com",
  messagingSenderId: "374903426791",
  appId: "1:374903426791:web:c6d172d6462746db3c5c42",
  measurementId: "G-SNBKTCE540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // auth ob'ektini yaratamiz

export { auth }; // auth ob'ektini eksport qilamiz
