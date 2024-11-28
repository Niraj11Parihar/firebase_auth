import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3Q0Xt0q3sQJbe6dDoUmlL8D6DAL8m4jQ",
  authDomain: "fir-auth-677c5.firebaseapp.com",
  projectId: "fir-auth-677c5",
  storageBucket: "fir-auth-677c5.firebasestorage.app",
  messagingSenderId: "426352444891",
  appId: "1:426352444891:web:633354d79167fc7e7bd3fe",
  measurementId: "G-2T5LF9YM2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()