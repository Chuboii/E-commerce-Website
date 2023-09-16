import Home from "./routes/home/home.component"
import { Route, Routes } from 'react-router-dom'
import Navigation from "./routes/navigation/Navigation.component"
import Signin from "./routes/signin/Signin.component"
import Signup from "./routes/signup/Signup.component"



function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Navigation/>}>
     <Route index element={<Home/>}/>
     <Route path="login" element={<Signin/>}/>
     <Route path="signup" element={<Signup/>}/>
    </Route>
     </Routes>
    </>
  )
}

export default App
