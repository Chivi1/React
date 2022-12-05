// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3FVMn0_CH1vteSN8pwp1DvEcRk3FoIis",
  authDomain: "reactfinal-8bfec.firebaseapp.com",
  projectId: "reactfinal-8bfec",
  storageBucket: "reactfinal-8bfec.appspot.com",
  messagingSenderId: "823386202359",
  appId: "1:823386202359:web:ec5dc409f665d2af7eb3f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app