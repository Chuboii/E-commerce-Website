import { createContext, useEffect, useState } from "react";
import { createUserDoc, onAuthChanged } from "../utils/firebase/firebase.utils";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
let [currentUser, setCurrentUser] = useState(null)

useEffect(()=>{
 let unsubscribe =  onAuthChanged((user)=>{
    if(user){
    createUserDoc(user)
    }
    setCurrentUser(user)
  })

  return unsubscribe
}, [])
let value = {currentUser, setCurrentUser}

    return(
        <UserContext.Provider value={value}>
           {children}
        </UserContext.Provider>
    )
}