// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//this allows to access database 
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcQmsbv_fp1ReACfOKuvNPZi3ewcCIKWk",
  authDomain: "blog-d71af.firebaseapp.com",
  projectId: "blog-d71af",
  storageBucket: "blog-d71af.appspot.com",
  messagingSenderId: "831058166451",
  appId: "1:831058166451:web:6c6a54de68e76c0a0026c6",
  measurementId: "G-DH8NNFHCCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//setup database and export it
export const db = getFirestore(app)