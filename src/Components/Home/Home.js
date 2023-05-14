import React from 'react';
import Carousel from '../Carousel/Carousel';
import Items from '../Items/Items';
import ItemsHome from '../ItemsHome/ItemsHome';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    return (
        <div className='mb-20'>
            <Carousel></Carousel>
            <ItemsHome></ItemsHome>
            <UserReviews></UserReviews>
        </div>
    );
};

export default Home;