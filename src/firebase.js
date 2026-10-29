import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdvQrXX3tfjK-WVznyCogj3fKrRWdvUVo",
    authDomain: "dev-deakin-p4-c8691.firebaseapp.com",
    projectId: "dev-deakin-p4-c8691",
    storageBucket: "dev-deakin-p4-c8691.firebasestorage.app",
    messagingSenderId: "849089097541",
    appId: "1:849089097541:web:1d81855b2aef03ad2e182c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;