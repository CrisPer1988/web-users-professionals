import CarouselHome from "../components/CarouselHome"
import "./styles/home.css"

const Home = () => {
  return (
    <div className="content__home">
        <h1 className="title__home">Profesionales de San Rafael</h1>
 
        <CarouselHome />
        <div className="content__info-home">
          <h2>Titulo de prueba</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel aliquam labore esse neque ea non natus assumenda architecto voluptate nam, quae eligendi, vero ut dolor consequuntur velit, aliquid quam?</p>
          <div className="contact__home">
            <h4>Sumate a la red</h4>
            <i className='bx bxs-phone-outgoing'>Telefono</i>
            <i className='bx bxl-whatsapp-square' >WhatsApp</i>
          </div>
        </div>

    </div>
  )
}

export default Home