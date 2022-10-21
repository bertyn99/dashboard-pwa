import { createApp } from "vue";
import "./style.css";
import router from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt30UObgrhug2_7bIqqY4YPYTvhdBG4Ck",
  authDomain: "ecms-pwa.firebaseapp.com",
  projectId: "ecms-pwa",
  storageBucket: "ecms-pwa.appspot.com",
  messagingSenderId: "687636991305",
  appId: "1:687636991305:web:2d288838979307e8789e98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import App from "./App.vue";
app.use(router);
createApp(App).mount("#app");
