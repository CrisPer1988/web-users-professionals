import CardProfessional from "../components/CardProfessional";
import "./styles/professionals.css"
import { Professional } from "../utils/interfaces";
import { useProfessionals } from "../hooks/useProfessionals";

const Professionals = () => {
  const { categories, professionals, handleSelectChange } = useProfessionals()

  return (
    <>
      <div className="content__professinals">
        <div className="filter">
          <h1>Escoge a tu profesional y contactalo</h1>
          <div className="content__options">
            <h4>CATEGORIAS:</h4>
            <select onChange={(e) => handleSelectChange(e.target.value)}>
              <option value="">Todos</option>
              {categories?.map((category:any) => (
                <option key={category.id} value={category.id}>
                  {category.name_category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="content_card">
          {professionals?.professionals.map((professional: Professional) => (
            <CardProfessional
              key={professional.id}
              professional={professional}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Professionals