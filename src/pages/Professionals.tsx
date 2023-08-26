import CardProfessional from "../components/CardProfessional";
import "./styles/professionals.css"
import { Categories, Professional } from "../utils/interfaces";
import { useProfessionals } from "../hooks/useProfessionals";

const Professionals = () => {
  const { categories, professionals, handleSelectChange } = useProfessionals()

  return (
    <>
      <div className="content__professinals">

        
      <div className="description__seccion-professionals">
      <img src="/images/logoo.png" alt="" />
      <div className="items__description">
              <h3>"Encuentra al Profesional Perfecto"</h3>
              <p>En nuestro sitio, te ofrecemos acceso a una amplia gama de profesionales altamente calificados y listos para ayudarte en tus proyectos y necesidades. Ya sea que busques un experto en peluquería, tecnología, construccion, o cualquier otra área, estamos aquí para ayudarte a encontrar al profesional perfecto.</p>
            </div>
        </div>
      <hr />
        <div className="filter">
        <h1>Escoge a tu profesional y contactalo</h1>
          <div className="content__options">
            <h4>CATEGORIAS:</h4>
            <select onChange={(e) => handleSelectChange(e.target.value)}>
              <option value="">Todos</option>
              {categories?.map((category:Categories) => (
                <option key={category.id} value={category.id}>
                  {category.name_category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="content_card">
          {professionals?.professionals.map((professional:Professional, index) => (
            <CardProfessional
              key={professional.id}
              professional={professional}
              index={index}
              
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Professionals