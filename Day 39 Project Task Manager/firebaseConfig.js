import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArCI1HkZndhcJDJalnmVWnmufWsQTjbY8",
  authDomain: "project-task-manager-9859a.firebaseapp.com",
  projectId: "project-task-manager-9859a",
  storageBucket: "project-task-manager-9859a.firebasestorage.app",
  messagingSenderId: "378922120704",
  appId: "1:378922120704:web:cb60bc17d62e67ecdc8ae5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };