import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyArw6h-3S50u1zroPSv-LgHP5fSNvykHAM",
  authDomain: "my-friends-2439c.firebaseapp.com",
  projectId: "my-friends-2439c",
  storageBucket: "my-friends-2439c.appspot.com",
  messagingSenderId: "108373516850",
  appId: "1:108373516850:web:b67c21e4a961cd5e2b122b"
  };
  const app = initializeApp(firebaseConfig);
  export const {auth} = getAuth(app)
  export const {db} = getFirestore(app)