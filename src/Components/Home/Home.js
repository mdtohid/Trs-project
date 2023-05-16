import React from 'react';
import Carousel from '../Carousel/Carousel';
import Items from '../Items/Items';
import ItemsHome from '../ItemsHome/ItemsHome';
import NoteCEO from '../NoteCEO/NoteCEO';
import Team from '../Team/Team';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    return (
        <div className='mb-20'>
            <Carousel></Carousel>
            <ItemsHome></ItemsHome>
            <UserReviews></UserReviews>
            <Team></Team>
            <NoteCEO></NoteCEO>
        </div>
    );
};

export default Home;