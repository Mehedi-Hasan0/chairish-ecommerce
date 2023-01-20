import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    const { name, price, description, img, how_it_fits, ratings, product_details, quality_care, _id } = product;
    return (
        <div className='border rounded-3xl shadow-md flex justify-between flex-col'>
            <div className=' bg-[#dce5e4] rounded-t-3xl'>
                <img src={img} alt="" className='mx-auto rounded-t-3xl' />
            </div>
            <div className=' mt-3 p-4'>
                <h4 className=' mb-1 text-dark text-lg font-semibold'>{name}</h4>
                <p className=' mb-3 text-sm text-dark opacity-90'>{product_details.slice(0, 50)}..</p>
                <div className=' flex items-center justify-between'>
                    <p className=' py-1 px-3 border-[2px] border-primary rounded-full'>{price}</p>
                    <Link to={`/shop/${_id}`}><button className=' btn btn-dark text-white rounded-full normal-case'>See details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;