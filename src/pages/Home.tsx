import CarouselHome from "../components/CarouselHome"
import "./styles/home.css"

const Home = () => {
  return (
    <div className="content__home">
     
      <header className="header__home">
      <img className="logo" src="/images/logoo.png" alt="" />
        <div className="home__text">
          <h1>Profesionales de San Rafael</h1>
        </div>
        <div className="background__home-header"></div>
        <div className="background__home-vector"></div>
        <div className="rigth"></div>
        <div className="background__home-vector-horizontal"></div>
        <div className="background__home-vector-horizontal2"></div>
      </header>
      <div className="description__home">
      <div className="items__text-home">
      <h3>"Encuentra a los mejores profesionales para tus proyectos. Conecta con expertos en todos los campos, desde tecnología hasta diseño y más. Simplificamos la búsqueda y contratación de talento. ¡Comienza hoy tu búsqueda!"</h3>
</div>
<div className="items__text-home">
<h3>"En nuestra plataforma, encontrar y contactar al profesional perfecto para tu proyecto nunca ha sido tan rápido y sencillo. En menos de 5 minutos, puedes explorar una amplia gama de expertos en diferentes campos, revisar sus perfiles, y ponerte en contacto directamente con aquellos que se adapten a tus necesidades."</h3>
</div>
        
      </div>

      <CarouselHome />
      <div className="content__info-home">
        <h2>SUMATE A LA RED</h2>
        <p>Ponte en contacto con nosotros</p>
        <div className="contact__home">
          <div className="content__contact">
          <div className="content__contact-icons">
          <i className='bx bxs-envelope items__icons icons icons__email'></i>
          <span>norberto.cp@hotmail.com</span>
          </div>
          <div className="content__contact-icons">
          <i className='bx bxl-whatsapp-square items__icons icons' ></i>
          <span>2622468440</span>
          </div>
            {/* <i className='bx bxs-envelope items__icons'><span>norberto.cp@hotmail.com</span></i> */}
            {/* <i className='bx bxl-whatsapp-square items__icons' ><span>2622468440</span></i> */}
            </div>
          {/* <div className="content__contact"></div> */}

          
          
          
          
          
        </div>

      </div>

    </div>
  )
}

export default Home