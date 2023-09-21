import './Checkout.scss'
import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react'


export default function Checkout(){
let {cartItem, setCartItem} = useContext(CartContext)
let [totalPurchase, setTotalPurchase] = useState(0)
useEffect(()=>{

let total = cartItem.reduce((tot, cartItem) => (tot + (cartItem.quantity * cartItem.price)) , 0)

setTotalPurchase(total)

}, [cartItem, setTotalPurchase])

let deleteProductFromCart = (idx) =>{
   let filteredProducts = cartItem.filter(el => el.id !== idx)

setCartItem(filteredProducts)
}

let incrementQty = (idx) =>{

    let increaseQty = cartItem.map(el =>{
        if(el.id === idx){
          return {...el, quantity: el.quantity + 1}
        }
        else{
            return el
        }
    })
    setCartItem(increaseQty)

}



let decrementQty = (idx) =>{

    let decreaseQty = cartItem.map(el =>{
        if(el.id === idx){
          return {...el, quantity: el.quantity > 0 ? el.quantity - 1 : el.quantity}
        }
        else{
            return el
        }
    })

    setCartItem(decreaseQty)

}




let checkoutProducts = cartItem.map(product =>{
    let {imageUrl, name, quantity, price} = product
    return(
        <div className='checkout-item' key={product.id}>
        <div className='checkout-image'>
        <img src={imageUrl} className='check-img'/>
        </div>
        <p className='checkout-p-name'>{name}</p>
        <div className='incre-decre-container'>
        <button className='checkout-decre'  onClick={
            () =>{
                decrementQty(product.id)
            }
        }>-</button>
        <p>{quantity}</p>
        <button className='checkout-incre' onClick={
            () =>{
                incrementQty(product.id)
            }
        }>+</button>
        </div>

        <p>{price}</p>
        <button className='checkout-del' onClick={() =>{
            deleteProductFromCart(product.id)
        }}> delete </button>
        </div>
    )
})
    return(
        <div className='checkout-container'>
        <header className='checkout-header'>
        <div className='h-text'>Product</div>
        <div className='h-text'>Description</div>
        <div className='h-text'>quantity</div>
        <div className='h-text'>Price</div>
        <div className='h-text'>Remove</div>
        </header>

<main className='checkout-main'>
{checkoutProducts}
</main>

<div className='checkout-total'>Total: ${totalPurchase}</div>
        </div>
    )
}