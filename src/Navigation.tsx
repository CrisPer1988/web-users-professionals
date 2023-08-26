import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink} from "react-router-dom"
import Home from "./pages/Home"
import Professionals from "./pages/Professionals"
import Footer from "./components/Footer"
import ProfessionalPage from "./pages/ProfessionalPage"
import Register from "./pages/Register"
import Login from "./components/Login"
import { useDispatch, useSelector } from "react-redux"
import { setIsLoggin } from "./store/slices/isloggin.slices"
import { scrollTop } from "./funtions/scroll"
import {useState} from "react"


const Navigation = () => {
 const {isLoggin}:any = useSelector(state => state)
 const dispatch = useDispatch()
 const [showMenu, setShowMenu] = useState(false)

 const logout = () => {
  dispatch(setIsLoggin(true));
  localStorage.setItem('isLoggin', JSON.stringify(true)); 
  localStorage.clear()
};

console.log(`puteteeeeeeeee ${isLoggin}`);
console.log(localStorage.getItem("token"));


  return (
      <BrowserRouter>
      <div className="content__nav">
        <h1 onClick={() => setShowMenu(!showMenu)} className="burger__menu">X</h1>
      <nav className={showMenu ? "active" : ""}> 
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""}  to={"/"} onClick={scrollTop}>Inicio</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to={"/professionals"} onClick={scrollTop}>Profesionales</NavLink>
          </li>
        </ul>
        {
          isLoggin ?  <ul>
          <li>
            
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to={"/register"} onClick={scrollTop}>Ingresar</NavLink>
          </li>
        </ul>
        :
        <ul>
        <li>
        <NavLink className={({isActive}) => isActive ? "nav-active" : ""} onClick={logout} to={"/register"} >Salir</NavLink>
        </li>
      </ul>
        }
      
       
       
      </nav>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="professionals" element={<Professionals />} />
        <Route path="professional/:id" element={<ProfessionalPage />} />
        <Route path="register" element={<Register 
        // setIsLoggin={setIsLoggin} 
        />} />
        <Route path="login" element={<Login 
         setIsLoggin={setIsLoggin} 
        />} />
      </Routes>
      
      <Footer />
      </div>
      </BrowserRouter>
 
  )
}

export default Navigation