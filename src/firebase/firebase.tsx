import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {

    apiKey: "AIzaSyA9fFVuHu5fJ-qHENK_snHeqO5Y5ICr6Aw",
  
    authDomain: "ticketmanager-5c905.firebaseapp.com",
  
    projectId: "ticketmanager-5c905",
  
    storageBucket: "ticketmanager-5c905.appspot.com",
  
    messagingSenderId: "596214536827",
  
    appId: "1:596214536827:web:d2a86d9d1695f86591a0de",
  
    measurementId: "G-3VG92M6XY2"
  
  };
const app=initializeApp(firebaseConfig)
export const db=getFirestore(app)