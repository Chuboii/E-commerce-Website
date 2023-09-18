import { Link, Outlet } from "react-router-dom";
import logo from '/src/assets/logo image/istockphoto-578100124-612x612.jpg'
import './Navigation.scss'
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/Users.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";


export default function Navigation(){
let [isActive, setIsActive] = useState(false)
let {currentUser} = useContext(UserContext)



let setActive = () =>{
  setIsActive(!isActive)
}

let signoutFunc =async () => {
await signOutUser() 

}

    return(
        <>
        <header>
        <Link to={'/'}><img className="logo" src={logo}/></Link>
        <button onClick={setActive}>Bars</button>
        <nav className={isActive ? "active" : ''}>
        <Link to={'shop'}>Shop</Link>
        <Link to={'contact'}>contact</Link>
        {currentUser ? <span className="logout-btn" onClick={signoutFunc}>Log out</span> :
        <Link to={'signup'}>Sign in</Link>
    }
        </nav>
        </header>
        <Outlet/>

        </>
    )
}