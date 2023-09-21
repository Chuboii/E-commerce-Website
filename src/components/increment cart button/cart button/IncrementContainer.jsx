import { useContext } from "react";
import AddButton from "../add button/AddButton";
import DecrementButton from "../decrement button/DecrementButton";
import { QtyContext } from "../../../contexts/QtyContext.context";
import './IncrementContainer.scss'

export default function IncrementContainer(){
    let {qty} = useContext(QtyContext)
    return(
        <div className="incre-container">
        <AddButton/>
        <span className="qty-add">{qty}</span>
        <DecrementButton/>
        </div>
    )
}