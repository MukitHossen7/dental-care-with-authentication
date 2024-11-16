import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBaP3bF2ILZnDEjFBIYrIzM1OzDLLqzjnc",
  authDomain: "dental-care-ffeb5.firebaseapp.com",
  projectId: "dental-care-ffeb5",
  storageBucket: "dental-care-ffeb5.firebasestorage.app",
  messagingSenderId: "55787605507",
  appId: "1:55787605507:web:1aa9b472998d8722048836",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
