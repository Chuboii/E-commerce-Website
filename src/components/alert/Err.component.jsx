import { useEffect } from 'react'
import './Err.scss'

export default function Err({errText, errStatus, setErr}){
useEffect(()=>{
let alrt = document.querySelector(".alrt")
let timeout;
if(errStatus){
    timeout = setTimeout(()=>{
alrt.classList.add("active")
    }, 100)
}
else{
    alrt.classList.remove("active")
}

return () =>{
    clearTimeout(timeout)
}
}, [errStatus])
let cancel = () =>{
  setErr(false)
}

    return(
        <div className="alrt">
        <p className="txt">{errText}</p>
        <button onClick={cancel}>Cancel</button>
        </div>
    )
}