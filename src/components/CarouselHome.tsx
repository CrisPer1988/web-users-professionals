import OwlCarousel  from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./styles/carousel.css"


const CarouselHome = () => {
  return (
    <>
    <div>
    <OwlCarousel  className='owl-theme content__carousel'  
    items={3} 
    loop 
    autoplay
    autoplayTimeout={1000}
    >
      <div className='item content__img'>
        <img className='img__carousel' src="/images/logo-carpintero.png" alt="" />
    </div>
    <div className='item content__img'>
        <img className='img__carousel' src="/images/logo-electricista.png" alt="" />
    </div>
    <div className='item content__img'>
        <img className='img__carousel' src="/images/logo-peluqueria.png" alt="" />
    </div>
    <div className='item content__img'>
        <img className='img__carousel' src="/images/logo-reparadorpc.png" alt="" />
    </div>
    <div className='item content__img'>
        <img className='img__carousel' src="/images/logo-reposteria.png" alt="" />
    </div>
    </OwlCarousel > 
    </div>
    </>
  )
}

export default CarouselHome