
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDzW1hlCIwFiTi4UK_R5Tz3OTVt9paOpyE",
  authDomain: "tiktok---clone-14cea.firebaseapp.com",
  projectId: "tiktok---clone-14cea",
  storageBucket: "tiktok---clone-14cea.appspot.com",
  messagingSenderId: "256769189091",
  appId: "1:256769189091:web:979f41a90e7884b03591d6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db