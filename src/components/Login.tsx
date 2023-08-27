import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../pages/styles/login.css"
import { useSubmitLogin } from "../hooks/useSubmitLogin";
import { DataLoginUser } from "../utils/interfaces";
import { setIsLoggin } from "../store/slices/isloggin.slices";

setIsLoggin
const Login = () => {
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm<DataLoginUser>();
  const { handleError, welcome, name, submit } = useSubmitLogin()

  const showForm = () => {
    navigate("/register")
  }

  return (
    <form className="form__login" onSubmit={handleSubmit(submit)}>
      {handleError ? <div className="modal__welcome modal__error">
                        <h2>ERROR!</h2>
                        <h4>Todos los campos son requeridos</h4>
                        <span>Password: Minimo 8 caracteres</span>
                    </div> : ""}
      {welcome ? <div className="modal__welcome"><h1>{`Bienvenid@ ${name}`}</h1></div> : ""}
      <h2>Ingresar</h2>
      <div className="item__form-login">
        <label htmlFor="email">Email</label>
        <input required {...register("email")} type="email" />
      </div>
      <div className="item__form-login">
        <label htmlFor="password">Password</label>
        <input required {...register("password")} type="password" />
      </div>
      <button className="btn__register">Enviar</button>
      <span className="indicator__login" onClick={showForm}>Registrate</span>
    </form>
  )
}

export default Login
