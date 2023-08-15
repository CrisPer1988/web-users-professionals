import { useEffect, useState } from "react";
import "./styles/professionalPage.css";
 import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../utils/getConfig";
import CardReviews from "../components/CardReviews";
import axios from "axios";
import { Professional } from "../utils/interfaces";
// import { useDispatch, useSelector } from "react-redux";
// import { AllReviewsThunk } from "../store/slices/reviews.slices";

const ProfessionalPage = () => {
  const { id } = useParams();
  const [professional, setProfessional] = useState<Professional>();
  const [showReview, setShowReview] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [modalReviewOk, setModalReviewOk] = useState(false)
  // const {reviews} = useSelector(state => state)
  // const dispatch = useDispatch()
   const navigate = useNavigate()


  useEffect(() => {
     const url = `http://localhost:4600/api/v1/professionals/${id}`;

    axios
      .get(url)
      .then((res) => {
        setProfessional(res.data.professional);
        // dispatch(AllReviewsThunk(id))
      })
      .catch((err) => console.log(err));
  }, []);
  
  console.log(professional);

 

  const handleShow = () => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    } else {
     return setShowReview(!showReview);
    }
    
  };


  const sendReview = (data:Professional) => {
    axiosInstance
      .post(`/professionals/reviews/${id}`, data)
      .then((res) => {
        console.log(res.data);
        setShowReview(false);
        setModalReviewOk(true)
        setTimeout(() => {
          setModalReviewOk(false)
        }, 2000);
        //dispatch(AllReviewsThunk(id))
        reset()
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <div className="content__oneProfessional">
     {
     modalReviewOk ? <div className="modal__review"><h2>Gracias por tu comentario</h2></div>
     : ""}
      <div className="content__info-professional">
        <div>
        <h1>{professional?.name}</h1>
        <h3>{professional?.categories[0].name_category}</h3>
        </div>
       
        
          <div className="item">
            <i className="bx bxl-whatsapp-square whats__app">
              <a
                href={`https://wa.me/549${professional?.number_tel}`}
                target="blank"
              >
            
                Contacto
              </a>
            </i>
          
          
            <i className="bx bxs-envelope email__icon">
              <a href="">{professional?.email}</a>
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
          <hr />
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
            <label htmlFor="rating">Rating</label>
            <input type="number" {...register("rating")} />
          </div>
          <button>Enviar</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfessionalPage;
