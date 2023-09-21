import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/Users.context.jsx'
import { ProductProvider } from './contexts/Product.context.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { QtyProvider } from './contexts/QtyContext.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <ProductProvider>
  <QtyProvider>
  <CartProvider>
    <App />
    </CartProvider>
    </QtyProvider>
    </ProductProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
