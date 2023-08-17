// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDfhhmcdd-vkU4WkEtBiwznqPJQ4JPrB0Y",
    authDomain: "react-firebase-chat-94cac.firebaseapp.com",
    projectId: "react-firebase-chat-94cac",
    storageBucket: "react-firebase-chat-94cac.appspot.com",
    messagingSenderId: "101826813044",
    appId: "1:101826813044:web:9aba7b72b6e12c879d4521",
    measurementId: "G-6VY340SCK6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;