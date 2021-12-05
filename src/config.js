

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyArw6h-3S50u1zroPSv-LgHP5fSNvykHAM",
    authDomain: "my-friends-2439c.firebaseapp.com",
    projectId: "my-friends-2439c",
    storageBucket: "my-friends-2439c.appspot.com",
    messagingSenderId: "108373516850",
    appId: "1:108373516850:web:b67c21e4a961cd5e2b122b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const stateChange = onAuthStateChanged;
// table ref
const colRef = collection(db,'users')

export { firebaseConfig, auth, db, stateChange }