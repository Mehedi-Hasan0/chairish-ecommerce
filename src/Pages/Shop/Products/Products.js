import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import ProductsCard from './ProductsCard/ProductsCard';

const Products = () => {
    const { data: shopProducts = [], isLoading } = useQuery({
        queryKey: ['shopProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/shopProducts');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <div className='max-w-6xl mx-auto lg:pt-32 lg:pb-40  py-20 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className=' mt-8 lg:mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        shopProducts.map(product => <ProductsCard key={product._id} product={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;