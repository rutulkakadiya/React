import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAk8WphVdp8aWuxa0WoOErCvrPpFWGHQZs",
    authDomain: "crud-firebase-129dc.firebaseapp.com",
    projectId: "crud-firebase-129dc",
    storageBucket: "crud-firebase-129dc.firebasestorage.app",
    messagingSenderId: "744387011220",
    appId: "1:744387011220:web:3ed5d8b7a8859c07904a81"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };