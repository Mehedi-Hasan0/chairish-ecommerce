import React from 'react';
import RecentBlogs from '../../RecentBlogs/RecentBlogs';
import ChooseUs from '../ChooseUs/ChooseUs';
import Featured from '../Featured/Featured';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <ChooseUs />
            <RecentBlogs />
        </div>
    );
};

export default Home;