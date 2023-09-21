import {createContext, useEffect, useState } from "react";

export let CartContext = createContext()


let addProductToCart = (cartItem, productIdx, products) =>{

let foundProduct = products.find((el) => el.id === productIdx);

if (foundProduct) {
  let duplicate = cartItem.some((el) => el.id === productIdx);

  if (duplicate) {
    let updatedCart = cartItem.map((item) => {
      if (item.id === productIdx) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
   return updatedCart
  } else {
   return [
      ...cartItem,
      { ...foundProduct, quantity: 1 }
    ]
  }
}

}


export let CartProvider = ({children}) =>{
let [toggleCart, setToggleCart] = useState(false)
let [cartItem, setCartItem] = useState([])
let [cartCount, setCartCount] = useState(0)

useEffect(()=>{
let newCount = cartItem.reduce((total, cartItem) => total + cartItem.quantity, 0)

setCartCount(newCount)

}, [cartItem])

let addToCart = (productIdx, products) =>{
    setCartItem(addProductToCart(cartItem, productIdx, products))
}

let value = {toggleCart, setToggleCart, addToCart, cartItem, setCartItem, cartCount}

    return(
        <CartContext.Provider value={value}>
        {children}
        </CartContext.Provider>
    )
}