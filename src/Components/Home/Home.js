import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Carousel from '../Carousel/Carousel';
import Items from '../Items/Items';
import ItemsHome from '../ItemsHome/ItemsHome';
import NoteCEO from '../NoteCEO/NoteCEO';
import Team from '../Team/Team';
import UserReviews from '../UserReviews/UserReviews';
import Technologies from '../Technologies/Technologies';
import Contact from '../Contact/Contact';
import Accordion from '../Accordion/Accordion';
import ProjectOverview from '../ProjectOverview/ProjectOverview';

const Home = () => {
    return (
        <div className='mb-20'>
            <Carousel></Carousel>
            <ItemsHome></ItemsHome>
            <BusinessSummary></BusinessSummary>
            <UserReviews></UserReviews>
            <Team></Team>
            <NoteCEO></NoteCEO>
            <ProjectOverview></ProjectOverview>
            <Technologies></Technologies>
            <Accordion></Accordion>
            <Contact></Contact>
        </div>
    );
};

export default Home;