import { useForm } from "react-hook-form"
import "./styles/login.css"
import { useNavigate } from "react-router-dom";
import { useSubmitRegister } from "../hooks/useSubmitRegister";
import { DataRegisterUser } from "../utils/interfaces";

const Register = () => {
    const { register, handleSubmit } = useForm<DataRegisterUser>();
    const navigate = useNavigate()

    const { welcome, name, handleError, submit, error } = useSubmitRegister()

    console.log(error);

    const showForm = () => {
        navigate("/login")
    }

    return (
        <>
            <form className="form__login"
                onSubmit={handleSubmit(submit)}>
                {
                    handleError ? <div className="modal__welcome modal__error">
                        <h2>ERROR!</h2>
                        <h4>Todos los campos son requeridos</h4>
                        <span>Password: Minimo 8 caracteres</span>
                    </div> : ""
                }
                { welcome ? <div className="modal__welcome"><h1>{`Bienvenid@ ${name}`}</h1></div> : "" }

                <h2>Registrate</h2>
                <div className="item__form-login">
                    <label htmlFor="name">Nombre</label>
                    <input  {...register("name")} type="text" />
                </div>
                <div className="item__form-login">
                    <label htmlFor="email">Email</label>
                    <input  {...register("email")} type="email" />
                </div>
                <div className="item__form-login">
                    <label htmlFor="password">Password</label>
                    <input  {...register("password")} type="password" />
                </div>
                <button className="btn__register">Enviar</button>
                <span className="indicator__login" onClick={showForm}>Ya tenes cuenta?</span>
            </form>
        </>
    )
}


export default Register