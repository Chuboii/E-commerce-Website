// import { useContext } from "react"
// import { QtyContext } from "../../../contexts/QtyContext.context"
import './Addbutton.scss'


export default function AddButton(){
// let {qty, setQty} = useContext(QtyContext)


let increment = () =>{
  console.log('');

}

    return(
        <button className="add-btn" onClick={increment}>
          +
        </button>
    )
}