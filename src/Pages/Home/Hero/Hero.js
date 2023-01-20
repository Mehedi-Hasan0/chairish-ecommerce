import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/dots/dots-light.svg';
import sofa from '../../../assets/images/couch.png';

const Hero = () => {
    return (
        <section className=' bg-primary'>
            <div className=' max-w-6xl mx-auto lg:pt-16 pt-8 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className=' flex flex-col lg:flex-row justify-between lg:relative'>
                    <div className='lg:w-[40%] lg:mr-8'>
                        <h1 className=' text-3xl md:text-[40px] text-white font-semibold leading-tight my-6'>Modern Interior Design Shop</h1>
                        <p className=' text-sm text-[#bdbdbd] leading-7 my-6'>The weather may be cool but the shopping is hot. See an edit of the pieces our curators are loving right this minute.</p>
                        <div>
                            <Link to='/shop'><button className='btn btn-secondary normal-case rounded-full'>Shop Now</button></Link>
                            <Link to='/shop'><p className='py-3 px-5 border-opacity-60 hover:border-opacity-100 rounded-full border-[2px] border-white inline-block text-white font-semibold text-[15px] text-opacity-80 hover:text-opacity-100 ml-4 cursor-pointer'>Explore</p></Link>
                        </div>
                    </div>
                    <div className=' lg:z-20 md:-mt-10 md:w-[80%] w-full sm:w-[90%] lg:w-[95%] mx-auto'>
                        <img src={sofa} alt="sofa" />
                    </div>
                    <img src={bg} alt="backgroundImage" className='hidden lg:flex lg:absolute lg:-right-0 lg:top-0 lg:z-10' />
                </div>
            </div>
        </section>
    );
};

export default Hero;