import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkO5LCuxfj0ofEh1xIAzniH5b2ei4SSfI",
  authDomain: "project--auth-915d7.firebaseapp.com",
  projectId: "project--auth-915d7",
  storageBucket: "project--auth-915d7.firebasestorage.app",
  messagingSenderId: "284722046954",
  appId: "1:284722046954:web:a0f80d8e4044e73631b493"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export {auth, db, googleProvider};