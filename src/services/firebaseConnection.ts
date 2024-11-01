
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDikFH1u6o8osR-gczNGAB5YYcwS44jEkM",
  authDomain: "dev-links-66a87.firebaseapp.com",
  projectId: "dev-links-66a87",
  storageBucket: "dev-links-66a87.firebasestorage.app",
  messagingSenderId: "462119263776",
  appId: "1:462119263776:web:c321035c5bc0e607d02645"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }