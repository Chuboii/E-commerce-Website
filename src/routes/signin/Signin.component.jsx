import './SignIn.scss'
import { signInWithpopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
export default function Signin(){

    let btn = async () =>{
    let {user} = await signInWithpopup()
    let userDocRef = await createUserDocumentFromAuth(user)
    }

    
    return(
        <div>
        <h1>SignIn page</h1>
        <button onClick={btn}>Sign in</button>
        </div>
    )
}