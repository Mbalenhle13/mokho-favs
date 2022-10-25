// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8W0ZjImL29uxpYIw7v2E3dXrVq_IYfhw",
  authDomain: "mokho-favs.firebaseapp.com",
  projectId: "mokho-favs",
  storageBucket: "mokho-favs.appspot.com",
  messagingSenderId: "929426540111",
  appId: "1:929426540111:web:635770a646d34879640c3a",
  measurementId: "G-QMX8GRGKQP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
