import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD0CK1BANbDflvNzvdVP63EolFtUCAkAnI",
  authDomain: "livecount-e9eae.firebaseapp.com",
  projectId: "livecount-e9eae",
  storageBucket: "livecount-e9eae.firebasestorage.app",
  messagingSenderId: "864544253553",
  appId: "1:864544253553:web:ca4c3faf7de5206e9bddd0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
