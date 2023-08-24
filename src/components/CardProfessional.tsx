import { useNavigate } from "react-router-dom"
import { Professional } from "../utils/interfaces"
import "./styles/cardProfessional.css"
import { useState } from "react"

export interface Props {
  professional: Professional,
}

const CardProfessional = ({professional}:Props) => {
  const [isHover, setIsHover] = useState(false)
  const navigate = useNavigate()
   

    const handleClick = (id:number) => {
      navigate(`/professional/${id}`)
    }


  return (
    <>
    <div
  onMouseEnter={() => setIsHover(true)}
  onMouseLeave={() => setIsHover(false)}
  className="card"
  style={{
    backgroundImage: `url(${professional.jobs[0].imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}>

  <div 
  className="text__card"
  style={{
    visibility: isHover ? "visible" : "hidden",
    width:"100%",
    height: "100%"
  }}
  >
  <h1>{professional.name}</h1>
  <h3>{professional.cat_name}</h3>
  <h4>Trabajos cargados: {professional.jobs.length}</h4>
  <button className="btn__jobs" onClick={() => handleClick(professional.id)}>Ver trabajos</button>
  </div>
</div>
    </> 
  )
}

export default CardProfessional


