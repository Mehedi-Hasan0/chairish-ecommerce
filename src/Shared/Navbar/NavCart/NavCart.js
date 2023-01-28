import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import remove from '../../../assets/icon/icons8-remove-32.png';
import { AuthContext } from '../../../context/AuthProvider';

const NavCart = ({ products }) => {
    const { cartProducts, setCartProducts, refetch } = useContext(AuthContext);
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, You want to delete this item?");
        if (proceed) {
            fetch(`http://localhost:5000/viewCart/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully');
                        const remaining = cartProducts.filter(item => item._id !== id);
                        setCartProducts(remaining);
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <div className='flex flex-row justify-between py-5 px-4'>
                <div>
                    <img src={products.img} alt="" className=' w-20 bg-[#dce5e4] p-2 rounded-xl' />
                </div>
                <div>
                    <h4 className='mb-2'>{products.name}</h4>
                    <p className=''>Price: {products.price}</p>
                </div>
                <div>
                    <img onClick={() => handleDelete(products._id)} src={remove} alt="" className='w-6 cursor-pointer' />
                </div>
            </div>
            <hr className='border-gray-200 mx-4' />
        </div>
    );
};

export default NavCart;