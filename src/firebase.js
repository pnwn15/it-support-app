// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// กำหนดค่าของ Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDneY-ObB5LQOTpPimwmKNK3u8tyb5yofQ",
    authDomain: "it-support-app-2c920.firebaseapp.com",
    projectId: "it-support-app-2c920",
    storageBucket: "it-support-app-2c920.appspot.com",
    messagingSenderId: "541991876440",
    appId: "1:541991876440:web:115578f7efcbf8572a172d",
    measurementId: "G-3Q21V6YWKT"
};

// เริ่มต้นแอป Firebase
const app = initializeApp(firebaseConfig);

// สร้าง Firestore instance
const db = getFirestore(app);

// ส่งออก db เพื่อใช้ในส่วนอื่น ๆ ของแอป
export { db };
