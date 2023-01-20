import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Products from './Products/Products';


const Shop = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <Banner />
            <Products />
        </div>
    );
};

export default Shop;