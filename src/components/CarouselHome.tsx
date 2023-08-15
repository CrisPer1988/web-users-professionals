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
        <img className='img__carousel' src="/images/prof-albañil.webp" alt="" />
    </div>
    <div className='item content__img'>
        <img className='img__carousel' src="/images/prof-electricista.avif" alt="" />
    </div>
    <div className='item content__img'>
        <img className='img__carousel' src="/images/prof-mecanico.webp" alt="" />
    </div>
    <div className='item content__img'>
        <img className='img__carousel' src="/images/prof-peluquero.avif" alt="" />
    </div>
    <div className='item content__img'>
        <img className='img__carousel' src="/images/prof-repostero.jpg" alt="" />
    </div>
    </OwlCarousel > 
    </div>
    </>
  )
}

export default CarouselHome