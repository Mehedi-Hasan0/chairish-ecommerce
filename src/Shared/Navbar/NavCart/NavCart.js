import React from 'react';
import remove from '../../../assets/icon/icons8-remove-32.png';

const NavCart = ({ products }) => {
    const { img, name, price } = products;
    return (
        <div>
            <div className='flex flex-row justify-between py-5 px-4'>
                <div>
                    <img src={img} alt="" className=' w-20 bg-[#dce5e4] p-2 rounded-xl' />
                </div>
                <div>
                    <h4 className='mb-2'>{name}</h4>
                    <p className=''>Price: {price}</p>
                </div>
                <div>
                    <img src={remove} alt="" className='w-6 cursor-pointer' />
                </div>
            </div>
            <hr className='border-gray-200 mx-4' />
        </div>
    );
};

export default NavCart;