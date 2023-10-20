import { useQuery } from '@tanstack/react-query';
import React from 'react';
import img from '../../image/avatar.ico';
import Loading from '../Loading/Loading';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import StarRating from '../StarRating/StarRating';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const UserReviews = () => {
    const { isLoading, error1, data: reviews, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
            fetch(`https://trs-project-server-side-main.vercel.app/reviews`).then(
                (res) => res.json(),
            ),
    })

    const location = useLocation();
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    console.log(deviceWidth);

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error1) {
        return <Loading></Loading>
    }

    return (
        <div className='px-10 py-10 bg-zinc-100'>
            <h1 className='text-2xl text-center mt-14 font-semibold '>User Reviews</h1>
            <Swiper
                slidesPerView={(deviceWidth < 613 && 1) || (deviceWidth < 900 && 2) || (deviceWidth > 900 && 3)}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mb-10"
            >
                {
                    reviews?.map(review =>
                        <SwiperSlide className='my-10'>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className='flex items-center'>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src={img} alt='' />
                                            </div>
                                        </div>
                                        <div className='ms-2'>
                                            <p className='text-xl font-semibold'>{review?.name}</p>
                                            <p className='font-semibold'>Rating: {review?.starRating}</p>
                                        </div>
                                    </div>
                                    <p>{review?.comment}</p>

                                    <div className="card-actions justify-start mt-4">
                                        <StarRating starRating={review?.starRating}></StarRating>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default UserReviews;






