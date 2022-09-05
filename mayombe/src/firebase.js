// Import the functions you need from the SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn_sFx0X43AZkeC68RxGfBlgR36h3gL9w",
  authDomain: "mayombe-44a94.firebaseapp.com",
  projectId: "mayombe-44a94",
  storageBucket: "mayombe-44a94.appspot.com",
  messagingSenderId: "533415684811",
  appId: "1:533415684811:web:3f569f07dbb4a7fdac094e",
  measurementId: "G-353ZGVW44X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
