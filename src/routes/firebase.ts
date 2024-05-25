// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHWwJFLhplA4cali-qOnM6FElSGtXBfic",
  authDomain: "nwitter-reloaded-90dd7.firebaseapp.com",
  projectId: "nwitter-reloaded-90dd7",
  storageBucket: "nwitter-reloaded-90dd7.appspot.com",
  messagingSenderId: "31577651697",
  appId: "1:31577651697:web:b6e53bf89ada3fa5432c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);