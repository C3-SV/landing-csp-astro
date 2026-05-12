import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import type { Auth } from "firebase/auth";
import type { FirebaseApp } from "firebase/app";
import type { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

const placeholderValues = new Set([
  "tu_api_key",
  "tu-proyecto.firebaseapp.com",
  "tu-proyecto",
  "1234567890",
  "1:1234567890:web:abcdef123456",
]);

const missingEnvKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

const placeholderEnvKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => typeof value === "string" && placeholderValues.has(value.trim()))
  .map(([key]) => key);

const invalidEnvKeys = [...new Set([...missingEnvKeys, ...placeholderEnvKeys])];

export const firebaseConfigDiagnostics = {
  missingEnvKeys,
  placeholderEnvKeys,
  invalidEnvKeys,
};

export const isFirebaseConfigured = invalidEnvKeys.length === 0;

if (!isFirebaseConfigured) {
  const details: string[] = [];
  if (missingEnvKeys.length) details.push(`faltantes: ${missingEnvKeys.join(", ")}`);
  if (placeholderEnvKeys.length) {
    details.push(`placeholders: ${placeholderEnvKeys.join(", ")}`);
  }
  console.warn(
    `[Firebase] Configuracion incompleta (${details.join(" | ")}). Revisa las variables PUBLIC_FIREBASE_* en .env.`,
  );
}

const firebaseApp: FirebaseApp | null = isFirebaseConfigured
  ? getApps().length
    ? getApp()
    : initializeApp(firebaseConfig)
  : null;

const firestoreDb: Firestore | null = firebaseApp ? getFirestore(firebaseApp) : null;
const firebaseAuth: Auth | null = firebaseApp ? getAuth(firebaseApp) : null;

export { firebaseApp as app, firestoreDb as db, firebaseAuth as auth };