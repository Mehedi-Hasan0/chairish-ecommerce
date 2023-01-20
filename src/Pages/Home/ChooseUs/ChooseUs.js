import React from 'react';
import bgImg from '../../../assets/images/why-choose-us-img.jpg';
import yellowDot from '../../../assets/dots/dots-yellow.svg';
import bag from '../../../assets/chooseUs/bag.svg';
import easyReturn from '../../../assets/chooseUs/return.svg';
import support from '../../../assets/chooseUs/support.svg';
import truck from '../../../assets/chooseUs/truck.svg';

const ChooseUs = () => {
    return (
        <section className=' md:mt-24 mt-14'>
            <div className='max-w-6xl mx-auto lg:py-32 py-16 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className=' flex lg:flex-row flex-col lg:justify-between'>
                    <div className='lg:w-1/2'>
                        <h3 className=' text-dark text-3xl font-medium mb-5'>Why Choose Us</h3>
                        <p className='text-[#727272] text-sm mb-10'>Chairish has several great things going for them: it's easy to list items, the selling fees are very low, and they offer fantastic technical support. There is no place better to sell.</p>
                        <div className='grid grid-cols-2 gap-8'>
                            <div>
                                <img src={truck} alt="" className=' mb-2' />
                                <h4 className=' text-dark text-sm font-medium mb-2'>Fast and Free Shipping</h4>
                                <p className='text-[#727272] text-sm'>We provide a fast and free shipping to all our products. No hidden cost or anything. Just buy and relax!</p>
                            </div>
                            <div>
                                <img src={bag} alt="" className=' mb-2' />
                                <h4 className=' text-dark text-sm font-medium mb-2'>Easy to Shop</h4>
                                <p className='text-[#727272] text-sm'>There is a chair for every kind of buyer in Chairish. Find the best chair for you and enjoy shopping.</p>
                            </div>
                            <div>
                                <img src={support} alt="" className=' mb-2' />
                                <h4 className=' text-dark text-sm font-medium mb-2'>24/7 Support</h4>
                                <p className='text-[#727272] text-sm'>We provide 24/7 support to our customer. You can message us anytime and we will reply within an hour.</p>
                            </div>
                            <div>
                                <img src={easyReturn} alt="" className=' mb-2' />
                                <h4 className=' text-dark text-sm font-medium mb-2'>Hassle Free Returns</h4>
                                <p className='text-[#727272] text-sm'>We understand sometimes a product may not satisfied your needs that's why we provide hassle free returns in 24 hour.</p>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:w-2/5 relative mt-16 lg:mt-0'>
                        <img src={bgImg} alt="" className=' rounded-3xl z-20 relative' />
                        <img src={yellowDot} alt="" className='absolute -top-20 -left-20 z-10' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;