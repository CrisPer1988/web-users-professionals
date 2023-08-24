import axios from "axios"
import {useState} from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { DataRegisterUser } from "../utils/interfaces";


export const useSubmitRegister = (setIsLoggin:any) => {
    const { reset } = useForm<DataRegisterUser>();

    const [welcome, setWelcome] = useState(false)
    const [name, setName] = useState()
    const [handleError, setHandleError] = useState(false)
    const [error, setError] = useState()

    const navigate = useNavigate()

    const submit = (data:DataRegisterUser) => {
        const url = "http://localhost:4600/api/v1/users/"
    
        axios.post(url, data)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            setName(res.data.user.name)
            console.log(res.data);
            setIsLoggin(false)
            setWelcome(true)
            setTimeout(() => {
                setWelcome(false)
            }, 2500); 
            reset()
            setTimeout(() => {
              navigate("/professionals")
          }, 2500); 
        })
        .catch(err => {
           setHandleError(true)
            setTimeout(() => {
                setHandleError(false)
            }, 2000);
            setError(err.response.data)
            console.log(err.response.data.errors)})   
    }

    return {
        welcome,
        name,
        handleError,
        submit,
        error
        
    }
}

