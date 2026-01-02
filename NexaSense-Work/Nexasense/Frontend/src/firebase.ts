import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDomxijymuZwm0KGmVyI5eI_Qu8ARWgTHw",
  authDomain: "nexasense-ca198.firebaseapp.com",
  projectId: "nexasense-ca198",
  storageBucket: "nexasense-ca198.appspot.com",
  messagingSenderId: "554170658710",
  appId: "1:554170658710:web:608bd37a7148f7348237b7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
