// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXISoIkPk5WVi5bepeQU6Z8uNjnnzojmc",
  authDomain: "quizx-b350a.firebaseapp.com",
  projectId: "quizx-b350a",
  storageBucket: "quizx-b350a.appspot.com",
  messagingSenderId: "975276908750",
  appId: "1:975276908750:web:5431a87de41ae68e7ab09f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;