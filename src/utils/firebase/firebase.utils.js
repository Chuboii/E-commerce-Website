import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {getDoc,doc, setDoc, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDW8pZoK1hLyafEQG_lTurshRWLlLaKo34",
  authDomain: "e-commerce-website-30c8c.firebaseapp.com",
  projectId: "e-commerce-website-30c8c",
  storageBucket: "e-commerce-website-30c8c.appspot.com",
  messagingSenderId: "819626531660",
  appId: "1:819626531660:web:60340b1e61b29f7ecf8de9"
};


const firebaseApp = initializeApp(firebaseConfig);

let provider = new GoogleAuthProvider()

provider.setCustomParameters(
    {
        prompt:'select_account'
    }
)

export const auth = getAuth()
export const signInWithpopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()


export const createUserDocumentFromAuth = async (userAuth) =>{
const userDocRef = doc(db, 'users', userAuth.uid)
console.log(userDocRef);

const userSnapShot = await getDoc(userDocRef)
console.log(userSnapShot);
console.log(userSnapShot.exists());

if (!userSnapShot.exists()) {
  const {displayName, email} = userAuth
  const createdAt = new Date()

  try {
  await setDoc(userDocRef, {
    displayName,
    email,
    createdAt
  })
  } catch (e) {
    console.log(e);
  }
}
else{
  return userDocRef
}
}
