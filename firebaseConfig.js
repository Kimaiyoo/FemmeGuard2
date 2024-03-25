// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA9oBa26_Hnm9qzjOD3wevotL_ILX9bHEs",
  authDomain: "femmeguard-fad68.firebaseapp.com",
  projectId: "femmeguard-fad68",
  storageBucket: "femmeguard-fad68.appspot.com",
  messagingSenderId: "134944698220",
  appId: "1:134944698220:web:89c1700ed45f2c03d14d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
