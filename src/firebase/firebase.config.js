// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const config=import.meta.env
console.log(import.meta.env.VITE_storageBucket);

const firebaseConfig = {
  apiKey: config.VITE_apiKey,
  authDomain: config.VITE_authDomain,
  projectId: config.VITE_projectId,
  storageBucket: config.VITE_storageBucket,
  messagingSenderId: config.VITE_messagingSenderId,
  appId: config.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app