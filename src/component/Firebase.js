
import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection, addDoc, getDocs, where, query, doc, getDoc,deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL ,  listAll} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBR4s9ePRfv_2H-pKjReIAOZz0iBA1mbwk",
  authDomain: "hamza-portfolio-2761d.firebaseapp.com",
  projectId: "hamza-portfolio-2761d",
  storageBucket: "hamza-portfolio-2761d.appspot.com",
  messagingSenderId: "85493314890",
  appId: "1:85493314890:web:ddc17b3d475e57e9cefdb3",
  measurementId: "G-F5TCHR12DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const workRef = collection(db, 'work');



const storage = getStorage()

export {
  addDoc,
  onSnapshot,
  getDocs,
  where,
  query,
  doc,
  getDoc,
  ref,
  storage,
  uploadBytes,
  listAll,
  getDownloadURL,  
  db,
  collection,
  deleteDoc,
  workRef,
  app
}