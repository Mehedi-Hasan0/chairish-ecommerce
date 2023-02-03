import React, { useState } from 'react';
import plus from '../../../../assets/icon/172525_plus_icon.svg';
import minus from '../../../../assets/icon/4115236_delete_min_minus_icon.svg';

const CartProductsCard = ({ products }) => {
    const { name, price, img } = products;
    const setPrice = parseInt(price.slice(1));
    const [updatedPrice, setUpdatedPrices] = useState(setPrice);
    const [count, setCount] = useState(1);

    const handleDecreasePrice = () => {
        const num = count - 1;
        if (num === 0) {
            return setCount(1);
        }
        setCount(num);
        const calcPrice = updatedPrice - setPrice;
        setUpdatedPrices(calcPrice);
    }

    const handleIncreasePrice = () => {
        const num = count + 1;
        setCount(num);
        const calcPrice = updatedPrice + setPrice;
        setUpdatedPrices(calcPrice);
    }

    return (
        <div>
            <div className='my-8'>
                <div className='flex flex-row justify-between'>
                    <img src={img} alt="" className=' w-48 bg-[#dce5e4] p-2 rounded-xl' />
                    <div>
                        <h4 className='text-dark text-lg font-medium'>{name}</h4>
                    </div>
                    <div>
                        <p className=' py-1 px-3 border-[2px] border-primary inline-block rounded-xl'>{updatedPrice}</p>
                    </div>
                    <div>
                        <span onClick={handleDecreasePrice} className='cursor-pointer'><img src={minus} alt="" /></span>
                        <p>{count}</p>
                        <span onClick={handleIncreasePrice} className='cursor-pointer'><img src={plus} alt="" /></span>
                    </div>
                </div>
                <hr className='border-primary my-8' />
            </div>
        </div>
    );
};

export default CartProductsCard;