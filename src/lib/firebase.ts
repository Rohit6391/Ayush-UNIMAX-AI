import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: Replace with your actual Firebase config
const firebaseConfig = {
  "projectId": "unimax-ai-studio",
  "appId": "1:55447697750:web:c85323df972fa91555fef7",
  "storageBucket": "unimax-ai-studio.appspot.com",
  "apiKey": "AIzaSyAQ94lxtE5HuvSPP3R645uxMMTntkF7FOg",
  "authDomain": "unimax-ai-studio.firebaseapp.com",
  "measurementId": "G-5G75362521",
  "messagingSenderId": "55447697750"
};

// NOTE: Firebase is disabled for local-only functionality.
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { app, auth, db };

// Export null or mock objects to avoid breaking imports if they are still used elsewhere.
export const app = null;
export const auth = null;
export const db = null;
