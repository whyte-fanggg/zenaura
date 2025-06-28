// src/services/FirebaseService.ts

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAgf7t4UZ9CRTVL1nEtSFk8K34Ili3qL0E",
  authDomain: "zenaura-3c088.firebaseapp.com",
  projectId: "zenaura-3c088",
  storageBucket: "zenaura-3c088.firebasestorage.app",
  messagingSenderId: "532391696996",
  appId: "1:532391696996:web:4c83a57bf0825e4ac6dd71",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
