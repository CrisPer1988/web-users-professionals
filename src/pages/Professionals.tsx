import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"
import { AllprofessionalsThunk } from "../store/slices/professionals.slices"
import {ProfessionalsInter} from "../utils/interfaces"

import CardProfessional from "../components/CardProfessional";
import "./styles/professionals.css"


const Professionals = () => {
  const {professionals} = useSelector((state:any) => state)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(AllprofessionalsThunk())
  }, [])

 // console.log(professionals);
console.log(localStorage.getItem("token"));



 

  return (
    <>
    <div className="content__professinals">
      <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusamus, ipsa optio laborum provident iste. Maiores perspiciatis esse illo laboriosam nemo sed expedita! Sapiente, molestiae tenetur nemo quidem fugiat dolorum?</h3>
      <div className="content_card">
      {
        professionals?.map((professional:ProfessionalsInter) => (
          <CardProfessional
          key={professional.id} 
          professional={professional}
          />
        ))
      }
      </div>
     

 
    </div>



      
    </>
  )
}

export default Professionals