import { createContext, useState } from "react";
import productData from '/src/shop-data.json'


export const ProductContext = createContext()

export const ProductProvider = ({children}) =>{
let [products, setProducts] = useState(productData)

// let updatedProduct = products.map(el => ({...el, quantity:1}))

let value = {products, setProducts}

    return(
        <ProductContext.Provider value={value}>
        {children}
        </ProductContext.Provider>
    )
}

