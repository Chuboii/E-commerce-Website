import { useContext } from "react"
import { QtyContext } from "../../../contexts/QtyContext.context"
import './DecrementButton.scss'

export default function DecrementButton() {
let {setQty} = useContext(QtyContext)
let decrement = () =>{
   setQty(c =>{
    if(c > 0){
       return c -1
    }
    else{
        return c = 0
    }
   })
}

    return (
        <button className="decre-btn" onClick={decrement}>-</button>
    )
}