import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SSwiper.module.scss'


//import "swiper/css";
/* import "swiper/css";
import "swiper/css/navigation";

/* import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css' */

//import 'swiper/swiper.min.css';
/* import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/thumbs/thumbs.min.css'; */

//import 'swiper/swiper.scss';
/* import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css' */

//import 'swiper/swiper-bundle.min.css'
//import 'swiper/swiper.min.css'
// import 'swiper/swiper.scss'


//import 'swiper/swiper.min.css'
// import 'swiper/swiper.scss';

export const SSwiper = () => {
    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          
        </Swiper>
    )
}
