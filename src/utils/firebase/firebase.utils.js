import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,onAuthStateChanged ,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDW8pZoK1hLyafEQG_lTurshRWLlLaKo34",
  authDomain: "e-commerce-website-30c8c.firebaseapp.com",
  projectId: "e-commerce-website-30c8c",
  storageBucket: "e-commerce-website-30c8c.appspot.com",
  messagingSenderId: "819626531660",
  appId: "1:819626531660:web:60340b1e61b29f7ecf8de9"
};


initializeApp(firebaseConfig);

let googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    params:"select_account"
})
export const auth = getAuth()

export const userSignInWithGoogle = () => signInWithPopup(auth, googleProvider)

let db = getFirestore()

export let createUserDoc = async (userAuth, alternative) =>{
  if(!userAuth) return

    let setUserCollection = doc(db, 'users', userAuth.uid)
 
    try{
        let getUserInfo = await getDoc(setUserCollection)
     
        let {displayName,email} = userAuth
        let createdAt = new Date()


     if (!getUserInfo.exists()) {
     await setDoc(setUserCollection,{
          createdAt,
          displayName,
          email,
          ...alternative
        })
     }
     
    }
    catch(e){
        console.log(e);
    }

}

export const createUserWithEandP = async (auth, email, password) => {
if(!email || !password) return

return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEandP = async (auth, email, password) => {
  if(!email || !password) return
  
  return await signInWithEmailAndPassword(auth, email, password)
  }
  
export const signOutUser = () => signOut(auth)

export const onAuthChanged = (callback) => onAuthStateChanged(auth, callback)