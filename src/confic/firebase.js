// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALZ-aXqiyDBzk8HjZnCntdnBr97Qh7j4s",
  authDomain: "bar-react.firebaseapp.com",
  projectId: "bar-react",
  storageBucket: "bar-react.appspot.com",
  messagingSenderId: "479458735303",
  appId: "1:479458735303:web:19a8d95870568b42b53ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)

export const auth = getAuth(app)