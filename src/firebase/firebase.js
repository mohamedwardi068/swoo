import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCtgX4YlfNqTdIA-vSZaetn6iF_4VhSRDY",
  authDomain: "swoo-5b27c.firebaseapp.com",
  projectId: "swoo-5b27c",
  storageBucket: "swoo-5b27c.appspot.com",
  messagingSenderId: "633561345458",
  appId: "1:633561345458:web:ace0f415347ac4920988ab",
  measurementId: "G-R578PZWH8W"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
async function Loginn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
   
    const user = userCredential.user;
    console.log("first",userCredential.user)
    return user;
    
    
  } catch (error) {
    console.log('loginerreur::',error)
  }
}

async function signUp( name,phone,email, password) {
  try {
    console.log("skod",email)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password )
   
        const user = userCredential.user;
    return user;
      
  } catch (error) {
    console.log('signuperreur::',console.error())
  }
}

export { Loginn, signUp };
