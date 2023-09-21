import './Cart.scss'
import CartItem from "../cart item/CartItem"
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { useNavigate} from 'react-router-dom'

export default function Cart(){

    let navigate = useNavigate()
    let {cartItem, setToggleCart} = useContext(CartContext)

    let navigateToCheckout = () =>{
        setToggleCart(false)
        navigate('checkout')
    }

    return(
        <div className="cart-container">
    {cartItem.map((item, idx) =>
    <CartItem key={idx} selectedProduct={item}/>
    )}
        <div className="cart-btn-box">
<button className='checkout-btn' onClick={navigateToCheckout}>checkout</button>
 </div>       
 </div>
    )
}