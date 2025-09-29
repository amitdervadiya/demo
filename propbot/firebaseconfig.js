
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkn4xMHvkDJkMBqVsd6QbgiuyNitDl65I",
  authDomain: "form-db9cf.firebaseapp.com",
  projectId: "form-db9cf",
  storageBucket: "form-db9cf.firebasestorage.app",
  messagingSenderId: "437453436104",
  appId: "1:437453436104:web:af0ea3586780d06c5fe1fd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
