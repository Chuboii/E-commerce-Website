import Home from "./routes/home/home.component"
import { Route, Routes } from 'react-router-dom'
import Navigation from "./routes/navigation/Navigation.component"
import Signin from "./routes/signin/Signin.component"
import Signup from "./routes/signup/Signup.component"
import Hat from "./routes/shop/hat shop/hat.component"
import Mainshop from "./routes/shop/main shop/Mainshop"
import Checkout from "./routes/checkout/Checkout.component"


function App() {
  return (
    <>

    <Routes>
    <Route path="/" element={<Navigation/>}>
     <Route index element={<Home/>}/>
     <Route path="login" element={<Signin/>}/>
     <Route path="signup" element={<Signup/>}/>
     <Route path="shop/hats" element={<Hat/>}/>
     <Route path="shop" element={<Mainshop/>}/>
     <Route path="checkout" element={<Checkout/>}/>

       </Route>
     </Routes>
    </>
  )
}

export default App
