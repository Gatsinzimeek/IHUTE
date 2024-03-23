// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    signOut,
    onAuthStateChanged
  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkFJYLwhHSkgfElKREYqRnKLB9PEBNRWs",
  authDomain: "ihute-70d7d.firebaseapp.com",
  projectId: "ihute-70d7d",
  storageBucket: "ihute-70d7d.appspot.com",
  messagingSenderId: "706266677975",
  appId: "1:706266677975:web:4ea8e83fff7d4714eaa692",
  measurementId: "G-9RH7EMRMPH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const Auth = getAuth(firebaseApp);

const Googleprovider = new GoogleAuthProvider()
const FacebookProvider = new FacebookAuthProvider();

Googleprovider.setCustomParameters({
    prompt: "select_account"
});

export const RegisterWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(Auth, email, password);
}

export const LoginWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;
  return await signInWithEmailAndPassword(Auth, email, password);
}

export const LoginWithGoogle = () => signInWithPopup(Auth,Googleprovider);

export const LoginWithFacebook = () => signInWithPopup(Auth,FacebookProvider);

export const onAuthStateChangedListener = (Callback) =>{
  return onAuthStateChanged(Auth,Callback);
}

export const Logout = async () => {
   return signOut(Auth);
}