import { useForm } from "react-hook-form"
import { signInUserWithEandP, auth } from "../../utils/firebase/firebase.utils"
import './Signin.scss'
import { Link } from "react-router-dom"
import img from '/src/assets/auth images/react.png'
import Err from "../../components/alert/Err.component";
import { useState } from "react"

export default function Signin() {
let {register, handleSubmit, formState:{errors}} = useForm({
    mode:"onChange"
})
let [isErr, setIsErr] = useState(false)
let [errText, setErrText] = useState("")

let registerOptions ={
    email:{
        required:'Email is required',
        pattern:{
            value:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:"Invalid email address"
        }
    },
    password:{
        required: 'Password is required',
        pattern:{
            value: 6,
            message:'Password should be atleast 6 characters long'
        }
    }
}

let googleBtn = async () =>{

}
let submitForm = async (data) =>{
try{
    let {user} = await signInUserWithEandP(auth, data.email, data.password)
    
}
catch(e){
    if(e.code === 'auth/invalid-login-credentials'){
       setIsErr(true)
       setErrText("Invalid Email or Password")
    }
}
}
let text =  `Don't have an account? Register`
return(
    <>
  {isErr && <Err  errText={errText} errStatus={isErr} setErr={setIsErr}/>}
    <form className="form" onSubmit={handleSubmit(submitForm)}>
  <div className="img">
  <img className="image" src={img}/>

  </div>
  <div className="items">
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

<button className="button">Login</button>
<Link to={'/signup'} className="a">{text}</Link>
<p className="other">other login options</p>
    <button className="button" type="button" onClick={googleBtn}>Login with google</button>
   </div>
    </form>
    </>
)
}