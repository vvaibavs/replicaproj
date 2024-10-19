// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBfs4JQys9wF18ivA0egfiqiNYV1J7EFAw",
  authDomain: "replicaproj.firebaseapp.com",
  projectId: "replicaproj",
  storageBucket: "replicaproj.appspot.com",
  messagingSenderId: "345991849195",
  appId: "1:345991849195:web:710337c9bab99dbca60aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
