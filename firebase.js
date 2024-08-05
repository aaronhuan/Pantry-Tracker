// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHFIwGonbSPIKM2oxKC1RJfsdAE8GGPj8",
  authDomain: "p2-pantry-tracker.firebaseapp.com",
  projectId: "p2-pantry-tracker",
  storageBucket: "p2-pantry-tracker.appspot.com",
  messagingSenderId: "797744349068",
  appId: "1:797744349068:web:f9b79490f9b601a627e0a9",
  measurementId: "G-4VJRRCKC3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore};