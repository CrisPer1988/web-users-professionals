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
            {/* <div className="items__description">
              <h3>"Encuentra al Profesional Perfecto"</h3>
              <p>En nuestro sitio, te ofrecemos acceso a una amplia gama de profesionales altamente calificados y listos para ayudarte en tus proyectos y necesidades. Ya sea que busques un experto en peluquería, tecnología, construccion, o cualquier otra área, estamos aquí para ayudarte a encontrar al profesional perfecto.</p>
            </div>
            <div className="items__description">
            <h3>Filtro por Categoría</h3>
            <p>Entendemos que cada proyecto es único, por lo que hemos incorporado una función de filtro por categoría que te permite refinar tu búsqueda. Si ya tienes una idea clara de la categoría en la que necesitas ayuda, simplemente selecciona esa categoría y verás a todos los profesionales disponibles en ese campo.</p>
          </div> */}

            {/* <div className="items__description">
              <h3>Explora Nuestra Comunidad de Profesionales</h3>
              <p>Nuestra plataforma te brinda la oportunidad de explorar y conectarte con profesionales de diversas categorías y disciplinas. Puedes navegar a través de perfiles detallados, ver sus habilidades, experiencia y reseñas de otros usuarios para tomar una decisión informada.</p>
            </div>
          
          <div className="items__description items__description2">
            <h3>Filtro por Categoría</h3>
            <p>Entendemos que cada proyecto es único, por lo que hemos incorporado una función de filtro por categoría que te permite refinar tu búsqueda. Si ya tienes una idea clara de la categoría en la que necesitas ayuda, simplemente selecciona esa categoría y verás a todos los profesionales disponibles en ese campo.</p>
          </div>
          <div className="items__description items__description2">
            <h3>Encuentra al Profesional Ideal para Tu Proyecto</h3>
            <p>Ya sea que necesites un diseñador gráfico creativo, un programador experto, un profesional de la salud de confianza, o cualquier otro tipo de especialista, estamos aquí para ayudarte a encontrar a la persona adecuada. Nuestra comunidad de profesionales está lista para trabajar contigo y hacer que tus proyectos se conviertan en realidad.</p>
          </div> */}
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