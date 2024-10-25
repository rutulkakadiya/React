import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNIYlf2rU-QKMdqFljv5FELzWU-o9w9js",
  authDomain: "sign-up-and-sign-in-page-23ab5.firebaseapp.com",
  projectId: "sign-up-and-sign-in-page-23ab5",
  storageBucket: "sign-up-and-sign-in-page-23ab5.appspot.com",
  messagingSenderId: "799158589222",
  appId: "1:799158589222:web:f099fb385ac1d3c1de53e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }