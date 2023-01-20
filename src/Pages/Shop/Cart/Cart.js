import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Loading/Loading';
import CartProductsCard from './CartProductsCard/CartProductsCard';

const Cart = () => {
    const { viewCart, isLoading, } = useContext(AuthContext);

    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <div className='max-w-6xl mx-auto lg:pb-40  py-20 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div>
                    <h3 className='text-dark text-3xl font-semibold'>Shopping Cart</h3>
                    <p className=' text-sm mt-3'><Link to='/'>HomePage</Link> / <Link to='/shop'>Shop</Link> / <span className=' underline'>Shopping Cart</span></p>
                    <hr className='my-10 border-primary' />
                </div>
                <div>
                    <div className='w-[60%]'>
                        {
                            viewCart.map((products, i) => <CartProductsCard key={i} products={products} />)
                        }
                    </div>
                    <div className='w-[40%]'>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;