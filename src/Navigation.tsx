import { BrowserRouter } from "react-router-dom"
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Professionals from "./pages/Professionals"
import Footer from "./components/Footer"
import ProfessionalPage from "./pages/ProfessionalPage"
import Login from "./components/Login"
import {useState} from "react"

const Navigation = () => {
  const [nameNav, setNameNav] = useState(true)

  const logout = () => {
    localStorage.clear()
    setNameNav(false)
  }

  return (
    
      <BrowserRouter>
      <div className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/professionals"}>Profesionales</NavLink>
          </li>
        </ul>
        {
          nameNav ?  <ul>
          <li>
            <NavLink onClick={logout} to={"/login"}>Salir</NavLink>
          </li>
        </ul>
        :
        <ul>
        <li>
          <NavLink to={"/login"}>Ingresar</NavLink>
        </li>
      </ul>
        }
       
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="professionals" element={<Professionals />} />
        <Route path="professional/:id" element={<ProfessionalPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
 
  )
}

export default Navigation