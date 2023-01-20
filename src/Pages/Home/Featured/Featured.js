import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';
import FeaturedCards from './FeaturedCards/FeaturedCards';

const Featured = () => {
    const { data: featured = [], isLoading } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/featured');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <section>
            <div className='max-w-6xl mx-auto lg:pt-32 pt-16 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className=' flex items-center justify-between'>
                    <h3 className=' md:text-3xl sm:text-xl text-lg font-medium text-[#2f2f2f]'>Featured Collections</h3>
                    <Link to='/shop' className=' underline underline-offset-2 hover:no-underline font-semibold text-sm md:text-base'>View All</Link>
                </div>
                <div className=' mt-8 lg:mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        featured.map(item =>
                            <FeaturedCards
                                key={item._id}
                                item={item}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Featured;