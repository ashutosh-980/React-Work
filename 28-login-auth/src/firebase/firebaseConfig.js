// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm2CcX_KhU_PtJqHBFW0Vcmw9vpMPeXUM",
  authDomain: "login-auth-ce138.firebaseapp.com",
  projectId: "login-auth-ce138",
  storageBucket: "login-auth-ce138.firebasestorage.app",
  messagingSenderId: "824875361401",
  appId: "1:824875361401:web:06c441e2209c3b34cb20a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
