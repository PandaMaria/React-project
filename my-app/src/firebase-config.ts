
//import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
//import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRWT5sRvCj_PTEUHgbBP87Vkz285BJpV4",
  authDomain: "reactapp-990b8.firebaseapp.com",
  projectId: "reactapp-990b8",
  storageBucket: "reactapp-990b8.appspot.com",
  messagingSenderId: "907388336187",
  appId: "1:907388336187:web:c346d10d41a1017720c41e",
  measurementId: "G-CPDS74X422"
};
/*
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;*/
export const app = initializeApp(firebaseConfig);