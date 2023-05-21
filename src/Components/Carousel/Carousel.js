import React from 'react';
import carousel1 from '../../image/slide1.jpg';
import carousel2 from '../../image/slide2.jpg';
import carousel3 from '../../image/slide3.jpg';
import carousel4 from '../../image/jimmy-nilsson-masth-7gU8ssOTM8M-unsplash.jpg';
import './Carousel.css';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={carousel4} alt='' className="w-full h-[200px] md:h-[300px] lg:h-[500px] mb-10" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel2} alt='' className="w-full h-[200px] md:h-[300px] lg:h-[500px] mb-10" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel3} alt='' className="w-full h-[200px] md:h-[300px] lg:h-[500px] mb-10" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel1} alt='' className="w-full h-[200px] md:h-[300px] lg:h-[500px] mb-10" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;