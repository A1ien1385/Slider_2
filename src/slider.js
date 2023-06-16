import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css';

export const Slider = ({slides}) => {
    return (
    <Swiper
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      
      navigation={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
         <SwiperSlide className='slide' key={slide.image}>
                   <img src={slide.image} alt={slide.title}/>
                   <div className='text_box'>
                    <h2 className='text title'>{slide.title}</h2>
                    
                   </div>
         </SwiperSlide> 
      ))}
      
    </Swiper>)
}