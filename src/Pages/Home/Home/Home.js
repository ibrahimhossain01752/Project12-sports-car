import React from 'react';
import AllReviews from '../../AllReviews/AllReviews';
import Blog from '../../Blog/Blog';
import Cars from '../../MoreCars/Cars/Cars';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCars from '../HomeCars/HomeCars';


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCars></HomeCars>
            <AllReviews></AllReviews>
            <Blog></Blog>
        </div>
    );
};

export default Home;