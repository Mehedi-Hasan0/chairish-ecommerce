import React from 'react';

const FeaturedCards = ({ item }) => {
    const { name, price, img, product_details } = item;
    return (
        <div className='border rounded-3xl shadow-md flex justify-between flex-col'>
            <div className=' bg-[#dce5e4] rounded-t-3xl'>
                <img src={img} alt="" className='mx-auto rounded-t-3xl' />
            </div>
            <div className=' mt-3 p-4'>
                <h4 className=' mb-1 text-dark text-lg font-semibold'>{name}</h4>
                <p className=' mb-3 text-sm text-dark opacity-90'>{product_details.slice(0, 50)}..</p>
                <div className=' flex items-center justify-between'>
                    <p className=''>Price: {price}</p>
                    <button className=' btn btn-dark text-white rounded-full normal-case'>See details</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCards;