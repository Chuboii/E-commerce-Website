import { Link, Outlet } from "react-router-dom";
import logo from '/src/assets/logo image/istockphoto-578100124-612x612.jpg'
import './Navigation.scss'
import { useState } from "react";

export default function Navigation(){
let [isActive, setIsActive] = useState(false)

let setActive = () =>{
  setIsActive(!isActive)
}
    return(
        <>
        <header>
        <img className="logo" src={logo}/>
        <button onClick={setActive}>Bars</button>
        <nav className={isActive ? "active" : ''}>
        <Link to={'shop'}>Shop</Link>
        <Link to={'contact'}>contact</Link>
        <Link to={'signIn'}>sign in</Link>
        </nav>
        </header>
        <Outlet/>

        </>
    )
}