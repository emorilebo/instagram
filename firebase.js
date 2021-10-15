// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZRsut-FulOTQfj1WrAi1RU8pAg3TOeP4",
  authDomain: "insta-a8e38.firebaseapp.com",
  projectId: "insta-a8e38",
  storageBucket: "insta-a8e38.appspot.com",
  messagingSenderId: "270243004182",
  appId: "1:270243004182:web:89b573f0b45e8add619a37",
  measurementId: "G-RZNP657P49",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage };
