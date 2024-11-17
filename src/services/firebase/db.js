import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuuBeMyzriogKw7aXzEOXHDDiQNYb7kkU",
  authDomain: "coderhouse-ecommerce2-52984.firebaseapp.com",
  projectId: "coderhouse-ecommerce2-52984",
  storageBucket: "coderhouse-ecommerce2-52984.firebasestorage.app",
  messagingSenderId: "399471666993",
  appId: "1:399471666993:web:e3179da5c30d823df7b210"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)
export const itemskey = 'items'



