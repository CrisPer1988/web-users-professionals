import { useForm } from "react-hook-form"
import { useProfessionalPage } from "../hooks/useProfessionalPage"


const FormReview = () => {
   const {handleSubmit, register} = useForm<any>()
   const {sendReview} = useProfessionalPage()

  return (
    <form onSubmit={handleSubmit(sendReview)} className="form__review">
          <h3 className="close__icon" >
            X
          </h3>
          <div className="item__review">
            <label htmlFor="">Comentario</label>
            <textarea {...register("comment")}></textarea>
          </div>
          <div className="item__review">
            <label htmlFor="rating">Rating <span>(Valor maximo 10)</span> </label>
            <input type="number" {...register("rating")} />
          </div>
          <button>Enviar</button>
        </form>
  )
}

export default FormReview