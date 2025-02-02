import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL2mK2SbS-YPZq728KXxaZ7Iil0uOkT2I",
  authDomain: "notion-clone-52d8b.firebaseapp.com",
  projectId: "notion-clone-52d8b",
  storageBucket: "notion-clone-52d8b.firebasestorage.app",
  messagingSenderId: "303098295748",
  appId: "1:303098295748:web:d84ac1c9f763193f302091",
  measurementId: "G-M1VSL6D4MP",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
