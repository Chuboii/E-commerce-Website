import { createUserDoc, createUserWithEandP, userSignInWithGoogle, auth } from "../../utils/firebase/firebase.utils";
import './Signup.scss'
import {useForm} from 'react-hook-form'
import img from '/src/assets/auth images/react.png'
import { Link, Outlet } from "react-router-dom";
import Err from "../../components/alert/Err.component";
import { useState } from "react";

export default function Signup() {
let {register, handleSubmit, formState: { errors }, reset } = useForm({
    mode:'onChange'
})
let [isErr, setIsErr] = useState(false)
let [errText, setErrText] = useState("")

let registerOptions = {
    firstName: {
        required: `Firstname shouldn't be empty`
    },
    lastName: {
        required: `Lastname shouldn't be empty`
    },
    email:{
        required: `Email shouldn't be empty`,
        pattern:{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:"Invalid email address"
        }
    },
    password:{
        required: `Password shouldn't be empty`,
        minLength:{
            value:6,
            message:"Password must be atleast 6 characters long"
        },
        maxLength:{
            value:20,
            message: "Password must not exceed 20 characters long"
        }
    },
    confirmPassword:{
        required: `This field shouldn't be empty`,
        minLength:{
            value:6,
            message:"Password must be atleast 6 characters long"
        },
        maxLength:{
            value:20,
            message: "Password must not exceed 20 characters long"
        }
    }
}

let googleBtn = async () => {
    let {user} = await userSignInWithGoogle()
    await createUserDoc(user)
}

let submitForm = async (data) =>{
  if(data.password !== data.confirmPassword){
    setIsErr(true)
    setErrText("Passwords does not match")
    reset()
  }
  else{
    try{
   let {user} = await createUserWithEandP(auth, data.email, data.password)
   let displayName = `${data.firstName} ${data.lastName}`
   await createUserDoc(user, {displayName})
    }
    catch(e){
       if(e.code === 'auth/email-already-in-use'){
        setIsErr(true)
        setErrText("Email already in use")
       }
    }
    
  reset()
  }

}

    return(
        <>
        {isErr && <Err setErr={setIsErr} errStatus={isErr} errText={errText}/>}
        <form onSubmit={handleSubmit(submitForm)}>
        <div className="img">
        <img className="image" src={img}/>
        </div>
        <div className="items">
        <div> 
         <label htmlFor="firstName">Firstname:</label>
         <input type="text" name="firstName" id="firstName" {...register("firstName", registerOptions.firstName)}/>
         {errors.firstName && <p> {errors.firstName.message}</p>}
        </div>
      
        <div> 
        <label htmlFor="lastName">lastName:</label>
        <input type="text" name="lastName" id="lastName" {...register("lastName", registerOptions.lastName)}/>
        {errors.lastName && <p> {errors.lastName.message}</p>}
       </div>

       <div> 
       <label htmlFor="email">Email:</label>
       <input type="text" name="email" id="email" {...register("email", registerOptions.email)}/>
       {errors.email && <p> {errors.email.message}</p>}
      </div>

      <div> 
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" {...register("password", registerOptions.password)}/>
      {errors.password && <p> {errors.password.message}</p>}
     </div>

     <div> 
     <label htmlFor="confirmPassword">Confirm Password:</label>
     <input type="password" name="confirmPassword" id="confirmPassword" {...register("confirmPassword", registerOptions.confirmPassword)}/>
     {errors.confirmPassword && <p> {errors.confirmPassword.message}</p>}
     </div>
    
    <button className="button">Register</button>
    <Link to={'/login'} className="a">Already have an account? Login</Link>
    <p className="other">other signup options</p>
        <button className="button" type="button" onClick={googleBtn}>Sign In with google</button>
 
        </div>
        </form>
        <Outlet/>
        </>
    )
}