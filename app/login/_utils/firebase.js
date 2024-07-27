// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMudnX8paQ2bql0zX1FbzMsyvWiI4QgaE",
  authDomain: "litrate-b935c.firebaseapp.com",
  projectId: "litrate-b935c",
  storageBucket: "litrate-b935c.appspot.com",
  messagingSenderId: "677183527271",
  appId: "1:677183527271:web:5f5de9eabf8e06f761b7c2"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);