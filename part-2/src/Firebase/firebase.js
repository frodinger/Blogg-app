import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbFK_b13zh-1woYNG6PNPn13v8CaUJLKg",
  authDomain: "blogg-app-part2.firebaseapp.com",
  projectId: "blogg-app-part2",
  storageBucket: "blogg-app-part2.appspot.com",
  messagingSenderId: "173137550669",
  appId: "1:173137550669:web:6a5df3cb78860449556b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };