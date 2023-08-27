import { useEffect, useState } from "react";
import "./styles/professionalPage.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/getConfig";
import CardReviews from "../components/CardReviews";
import { useProfessionalPage } from "../hooks/useProfessionalPage";
import { useDispatch, useSelector } from "react-redux";
import { ProfessionalsByCategoryThunk } from "../store/slices/professionals.slices";
import { scrollTopBehavior } from "../funtions/scroll";



const ProfessionalPage = () => {
  const [professional, setProfessional] = useState<any>();
  const { register, handleSubmit } = useForm<any>();
  const navigate = useNavigate()
 

const {professionals}:any = useSelector(state => state)
const dispatch = useDispatch<any>()

  const {
    handleErrors,
    modalReview,
    stateReview,
    handleShow,
    sendReview,
    id,
    showReview
  } = useProfessionalPage()

  useEffect(() => {
    axiosInstance
      .get(`/professionals/${id}`)
      .then((res) => {
        setProfessional(res.data.professional);
      })
      .catch((err) => {
        navigate("/login")
        console.log(err)
      });

  }, [stateReview, id]);


const idCategoryProfesional: number | undefined  = professional?.categories[0].CategoryProfessional?.categoryId;

console.log(idCategoryProfesional);

  const  discoveryProf = (id:number) => {
    navigate(`/professional/${id}`)
  }

  // const scrollTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }

useEffect(() => {
  if (idCategoryProfesional !== undefined) {
    dispatch(ProfessionalsByCategoryThunk(idCategoryProfesional));
  }
}, [idCategoryProfesional]);

  console.log(professionals);
  

  return (
    <div className="content__oneProfessional">
      {
        modalReview ? <div className="modal__review"><h2>Gracias por tu comentario</h2></div>
          : ""}

      {
        handleErrors ? <div className="modal__review text__error">
          <h2>ERROR!</h2>
          <h4>Todos los campos son requeridos</h4>
          <span> *Rating: minimo "1", maximo "10" </span>
        </div> : ""
      }

      <div className="content__info-professional">
        <div>
          <h1>{professional?.name}</h1>
          <h3>{professional?.categories[0].name_category}</h3>
        </div>
        <div className="item">
          <i className="bx bxl-whatsapp-square whats__app">
            <a className="item__text"
              href={`https://wa.me/549${professional?.number_tel}?text=Hola%20${professional?.name},%20te%20escribo%20desde%20la%20web%20Profesionales%20San%20Rafael`}
               
              target="blank"
            >
              Contacto
            </a>
          </i>
          <i className="bx bxs-envelope email__icon">
            <a className="item__text" href="">{professional?.email}</a>
          </i>
        </div>
        <button className="btn__review" onClick={handleShow}>
          Crear reseña
        </button>

      </div>
      <h2 className="title__jobs">Trabajos</h2>
      <div className="content__jobs-imgs">
        {professional?.jobs.map((job:any) => (
          <div className="content__img-jobs" key={job.id}>
            <img src={job.imageUrl} alt={job.work_name} />
            <h3>{job.work_name}</h3>
            <h4>{job.description}</h4>
          </div>
        ))}
      </div>

      <h2 className="title__reviews">Reseñas</h2>
      <div className="reviews__cards">
        {
          professional?.reviews.length > 0 ? (
            professional?.reviews
              // .sort((a:any, b:any) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((review:any) => (
                <CardReviews key={review.id} review={review} />
              ))
          ) : (
            <h3>Sin reseñas</h3>
          )

        }
      </div>


      {showReview ? (
        <form onSubmit={handleSubmit(sendReview)} className="form__review">
          <h3 className="close__icon" onClick={handleShow}>
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
          <button className="btn__send">Enviar</button>
        </form>
      ) : (
        ""
      )}
      <div className="content__discover">
      <h2>Descubri profesionales similares</h2>

      <div className="content__discover-card">
      {professionals?.professionals.filter((profe:any) => profe.id !== professional?.id).map((prof:any) => (
          <div className="card__discover" key={prof.id}>
            <h1>{prof.name}</h1>
            <img src={prof.jobs[0].imageUrl} alt="" />
            <h3>Trabajos cargados: {prof.jobs.length}</h3>
            <button onClick={() => {
              discoveryProf(prof.id)
              scrollTopBehavior();
              }}
              className="btn__jobs btn__discovery"
              >Descubrir</button>
          </div>
        ))}
      </div>
      </div>


    </div>
  );
};

export default ProfessionalPage;
