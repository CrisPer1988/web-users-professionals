import { useNavigate } from "react-router-dom"
import { categoryInter } from "../utils/interfaces"
import "./styles/cardProfessional.css"

const CardProfessional = ({professional}) => {
  const navigate = useNavigate()
   

    const handleClick = () => {
      navigate(`/professional/${professional.id}`)
    }


  return (
    <div>
    {
      <div className="card">
        <h1>{professional.name}</h1>
        {professional.categories.map((category:categoryInter) => (
          <div key={category.id}>
            <h3>{category.name_category}</h3>   
          </div>   
        ))}
        <h4>Trabajos cargados: {professional.jobs.length}</h4>
        {/* <h4>Rating: {professional?.reviews.map(review => (
            <h4>{review.rating} /10</h4>
        ))}</h4> */}
        
        <button className="btn__jobs" onClick={handleClick}>Ver trabajos</button>
      </div>
    }
    </div>
    
  )
}

export default CardProfessional