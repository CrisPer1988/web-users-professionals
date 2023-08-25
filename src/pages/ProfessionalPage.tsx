import { useEffect, useState } from "react";
import "./styles/professionalPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/getConfig";
import CardReviews from "../components/CardReviews";
import { Professional } from "../utils/interfaces";
import { useProfessionalPage } from "../hooks/useProfessionalPage";
import { useDispatch, useSelector } from "react-redux";
import { ProfessionalsByCategoryThunk } from "../store/slices/professionals.slices";



const ProfessionalPage = () => {
  const [professional, setProfessional] = useState<Professional>();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

 

const {professionals} = useSelector(state => state)
const dispatch = useDispatch()

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


const idCategoryProfesional = professional?.categories[0]?.CategoryProfessional?.categoryId;

console.log(idCategoryProfesional);

  const  discoveryProf = (id) => {
    navigate(`/professional/${id}`)
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

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
              href="whatsapp://send?phone=2622468440&text=Hola%20amigo,%20estoy%20interesado%20en%20tu%20servicio"
              // {`https://wa.me/549${professional?.number_tel}`}
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
        {professional?.jobs.map((job) => (
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
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((review) => (
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
            <textarea name="comment" {...register("comment")}></textarea>
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
      {professionals?.professionals.filter((profe) => profe.id !== professional?.id).map((prof) => (
          <div className="card__discover" key={prof.id}>
            <h1>{prof.name}</h1>
            <img src={prof.jobs[0].imageUrl} alt="" />
            <h3>Trabajos cargados: {prof.jobs.length}</h3>
            <button onClick={() => {
              discoveryProf(prof.id)
              scrollTop();
              }}
              className="btn__jobs"
              >Descubrir</button>
          </div>
        ))}
      </div>
      </div>


    </div>
  );
};

export default ProfessionalPage;
