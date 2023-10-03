// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgNr0p5fkvKy3qYxF3MdA5qm2NeMPSNnA",
  authDomain: "dragon-news-a08dd.firebaseapp.com",
  projectId: "dragon-news-a08dd",
  storageBucket: "dragon-news-a08dd.appspot.com",
  messagingSenderId: "443274392261",
  appId: "1:443274392261:web:7a660255e478f84f0bf6ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;