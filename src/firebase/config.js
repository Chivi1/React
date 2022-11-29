// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3vrq9F_CTSqbbP3YotpXFygCDK3WZyic",
  authDomain: "app-react-9b062.firebaseapp.com",
  projectId: "app-react-9b062",
  storageBucket: "app-react-9b062.appspot.com",
  messagingSenderId: "1091152010528",
  appId: "1:1091152010528:web:39b0107babde0b860b0b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app