// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcXc3u9SZkQxsAnsLoHP4SOfGs0ztAdZ0",
  authDomain: "to-dos-app-34efe.firebaseapp.com",
  projectId: "to-dos-app-34efe",
  storageBucket: "to-dos-app-34efe.appspot.com",
  messagingSenderId: "746053225875",
  appId: "1:746053225875:web:354b3d5bbf5cc278fbec66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;