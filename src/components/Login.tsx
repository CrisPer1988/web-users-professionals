import axios from "axios";
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";
import "./styles/login.css"
import { useDispatch } from "react-redux";
import axiosInstance from "../utils/getConfig";



const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [token, setToken] = useState()
    const [showFormLogin, setShowFormLogin] = useState(false)
    const dispatch = useDispatch()


    const submit = (data) => {
        const url = "http://localhost:4600/api/v1/users/"

        axios.post(url, data)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("name", res.data.user.name)
            setToken(res.data.token)
            //dispatch(AllprofessionalsThunk())
            //console.log(res.data)
           
        })
        .catch(err => console.log(err))
    }

    const submitLogin = (data) => {
        const url = "http://localhost:4600/api/v1/users/login/"

        axios.post(url, data)
          .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.user.name);          
          })
          .catch(err => {
            console.log(err);
          });
      };
    //console.log(token);
    console.log(localStorage.getItem("token"));
    
    

 
    const handleLogout = () => {
        localStorage.clear()
        setToken("")
    }

    const showForm = () => {
        setShowFormLogin(!showFormLogin)
    }

  return (
    <>
    <form className={`form__login ${showFormLogin ? "show__form" : ""}`} onSubmit={handleSubmit(submit)}>
        <h2>Registrate</h2>
        <div className="item__form-login">
            <label htmlFor="name">Nombre</label>
            <input {...register("name")} type="text" />
        </div>
        <div className="item__form-login">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" />
        </div>
        <div className="item__form-login">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" />
        </div>
        <button>Enviar</button>
        <span className="indicator__login" onClick={showForm}>Ya tenes cuenta?</span>
    </form>

    <form className={`form__login show__form ${showFormLogin ? "show__form-active" : ""}`} onSubmit={handleSubmit(submitLogin)}>
    <h2>Login </h2>
        <div className="item__form-login">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" />
        </div>
        <div className="item__form-login">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" />
        </div>
        <button>Enviar</button>
        <span className="indicator__login" onClick={showForm}>Registrate</span>
    </form>
    </>
  )
}
//}

export default Login