import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 

import {Autoplay, Pagination,Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div>
      <Swiper
       
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full h-80" src="https://images.unsplash.com/photo-1577774438656-768f1e5d9ed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /> </SwiperSlide>

        <SwiperSlide><img className="w-full h-80" src="https://media.istockphoto.com/id/1381494380/photo/carousel-of-horses-in-festive-days.webp?b=1&s=170667a&w=0&k=20&c=_K1Ia5oqY3gY-gOTNuNxSKrQAyovc7v81KGgSwOVf0c=" alt="" /></SwiperSlide>

        <SwiperSlide><img className="w-full h-80" src="https://media.istockphoto.com/id/534577183/photo/carousel-horses-in-amusement-park.webp?b=1&s=170667a&w=0&k=20&c=Dew3qcW6QMROoC9201_V_fQsvCjPXUtUG-xuAiiSwjs=" alt="" /></SwiperSlide>

        <SwiperSlide><img className="w-full h-80" src="https://media.istockphoto.com/id/1516920214/photo/part-of-carousel-by-the-eiffel-tower-in-paris-on-sunset-background-france.webp?b=1&s=170667a&w=0&k=20&c=07JY2z5jj0cyvc-TyBDTT2MZMtK3fTWNUip4ju2m7DQ=" alt="" /></SwiperSlide>

        <SwiperSlide><img className="w-full h-80" src="https://media.istockphoto.com/id/1428947857/photo/colorful-carousel-in-the-city.webp?b=1&s=170667a&w=0&k=20&c=C1-2SE6dv3EXzg7VYLSVynwI4Unw9TN-P5v8wUy4mAQ=" alt="" /></SwiperSlide>

        <SwiperSlide><img className="w-full h-80 " src="https://media.istockphoto.com/id/1182474473/photo/old-fashioned-chairoplane-chain-swing-ride-at-munichs-beer-fest-germany.webp?b=1&s=170667a&w=0&k=20&c=uJ1pCMSLZpKUahOBENjFgbk7mePUmRCuw2HfZ419I9I=" alt="" /></SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;
