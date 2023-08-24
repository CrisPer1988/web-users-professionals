import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Professionals from "./pages/Professionals"
import Footer from "./components/Footer"
import ProfessionalPage from "./pages/ProfessionalPage"
import Register from "./pages/Register"
import Login from "./components/Login"
import { useDispatch, useSelector } from "react-redux"
import { setIsLoggin } from "./store/slices/isloggin.slices"


const Navigation = () => {

  // const [isLoggin] = useState(true);

 const {isLoggin} = useSelector(state => state)
 const dispatch = useDispatch()

console.log(isLoggin);


  const logout = () => {
    // setIsLoggin(!isLoggin)
    dispatch(setIsLoggin(true))
    localStorage.clear()
  }




  return (
      <BrowserRouter>
      <div className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""}  to={"/"}>Inicio</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to={"/professionals"}>Profesionales</NavLink>
          </li>
        </ul>
        {
          isLoggin ?  <ul>
          <li>
            
            <NavLink className={({isActive}) => isActive ? "nav-active" : ""} to={"/register"}>Ingresar</NavLink>
          </li>
        </ul>
        :
        <ul>
        <li>
        <NavLink className={({isActive}) => isActive ? "nav-active" : ""} onClick={logout} to={"/register"}>Salir</NavLink>
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