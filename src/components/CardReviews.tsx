import "./styles/cardReviews.css"

const CardReviews = ({review}) => {

  return (
    <>
    
    <div className="content__review" key={review.id}>
        <h3 className="review__name">{review.user.name}</h3>
        <h3 className="review__comment-title">Comentario: </h3>
        <h5 className="review__comment-comment">{review.comment}</h5>
       
        <h5 className="review__rating">Puntuacion: {review.rating}/10</h5>
        <h5 className="review__date">Publicado el: {new Date(review.createdAt).getFullYear()}-{new Date(review.createdAt).getMonth() + 1}-{new Date(review.createdAt).getDate()}</h5>
   
      </div>
      </>
  )
}

export default CardReviews