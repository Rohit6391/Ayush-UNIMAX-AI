import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// IMPORTANT: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCIL_7k--73fMM6VevZEqEmDLp4tmBHqt0",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "aum.verse",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "AI12d5ds35s",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "3000_TB",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "AI1g1d515gf",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1235v5v3a55d"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
