import React from 'react';
import { Link } from 'react-router-dom';
import post1 from '../../assets/images/post-1.jpg';
import post2 from '../../assets/images/post-2.jpg';
import post3 from '../../assets/images/post-3.jpg';

const RecentBlogs = () => {
    const blogsData = [
        {
            img: post1,
            name: 'First Time Home Owner Ideas',
            author: ' Kristin Watson',
            date: ' Dec 19, 2022'
        },
        {
            img: post2,
            name: 'How To Keep Your Furniture Clean',
            author: ' Robert Fox',
            date: ' Dec 15, 2022'
        },
        {
            img: post3,
            name: 'Small Space Furniture Apartment Ideas',
            author: ' Kristin Watson',
            date: ' Dec 12, 2022'
        },
    ]
    return (
        <section>
            <div className='max-w-6xl mx-auto lg:mb-32 mb-16 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className=' flex items-center justify-between'>
                    <h3 className=' md:text-3xl sm:text-xl text-lg font-medium text-[#2f2f2f]'>Recent Blog</h3>
                    <Link className=' underline underline-offset-2 hover:no-underline font-semibold text-sm md:text-base'>View All</Link>
                </div>
                <div className=' mt-8 lg:mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                </div>
                <Link className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                    {
                        blogsData.map((blog, i) => <div key={i}>
                            <div>
                                <img src={blog.img} alt="" className='rounded-3xl hover:opacity-60' />
                                <div className=' px-3 mt-5'>
                                    <h4 className='font-medium text-dark'>{blog.name}</h4>
                                    <p className='text-sm text-dark font-medium mt-2'><span className=' text-[#727272]'>by</span>{blog.author} <span className=' text-[#727272]'>on</span>{blog.date}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </Link>
            </div>
        </section>
    );
};

export default RecentBlogs;