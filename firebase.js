// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAULh4jSmXx-G5l9kounVwIDbZ1RTabJY0",
  authDomain: "insta-2-yt-5cf25.firebaseapp.com",
  projectId: "insta-2-yt-5cf25",
  storageBucket: "insta-2-yt-5cf25.appspot.com",
  messagingSenderId: "778529995267",
  appId: "1:778529995267:web:bc5a5d378dc0b204e9ac36"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); 
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }; 