
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyDjRm_I9yIaEMRloTpYy7du64wyGzkoGG0",
    authDomain: "coder-react-6eefe.firebaseapp.com",
    projectId: "coder-react-6eefe",
    storageBucket: "coder-react-6eefe.appspot.com",
    messagingSenderId: "986349920689",
    appId: "1:986349920689:web:cb9f235a9f7f74e0f71d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

