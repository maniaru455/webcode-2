// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1p7TGMudltZF62yg4Jh2JrxV-8LZ91hA",
    authDomain: "stackoverflw-clone.firebaseapp.com",
    projectId: "stackoverflw-clone",
    storageBucket: "stackoverflw-clone.appspot.com",
    messagingSenderId: "535796260491",
    appId: "1:535796260491:web:d65d64a7c431596d8d3e8e",
    measurementId: "G-E8F6FB5FHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
