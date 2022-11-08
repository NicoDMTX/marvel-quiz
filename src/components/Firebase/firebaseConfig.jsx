import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

const config = {
    apiKey: "AIzaSyDnj7kI3WZwPujwGJJ8YGRYB9sR6BRgKoc",
    authDomain: "marvel-quiz-3a881.firebaseapp.com",
    projectId: "marvel-quiz-3a881",
    storageBucket: "marvel-quiz-3a881.appspot.com",
    messagingSenderId: "507895446984",
    appId: "1:507895446984:web:cdbd242e517817e41d14fd"
  };

const app = initializeApp(config)
export const auth = getAuth(app);
