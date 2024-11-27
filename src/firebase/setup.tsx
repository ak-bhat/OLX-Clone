import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDZth_jUw52SIRzDBIw3eheCIW281xd0gE",
  authDomain: "olx-clone-922b0.firebaseapp.com",
  projectId: "olx-clone-922b0",
  storageBucket: "olx-clone-922b0.firebasestorage.app",
  messagingSenderId: "478208389783",
  appId: "1:478208389783:web:1fbe2b0c768d0349116fd2"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()