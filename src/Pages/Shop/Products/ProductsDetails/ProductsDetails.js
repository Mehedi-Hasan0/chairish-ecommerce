import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../../../Loading/Loading';
import plus from '../../../../assets/icon/172525_plus_icon.svg';
import minus from '../../../../assets/icon/4115236_delete_min_minus_icon.svg';
import star from '../../../../assets/icon/285661_star_icon.png';
import bag from '../../../../assets/icon/bag.svg';
import easyReturn from '../../../../assets/chooseUs/return.svg';
import support from '../../../../assets/chooseUs/support.svg';
import truck from '../../../../assets/chooseUs/truck.svg';
import bags from '../../../../assets/chooseUs/bags.svg';
import buyIcon from '../../../../assets/icon/icons8-buying-24.png';
import { AuthContext } from '../../../../context/AuthProvider';

const ProductsDetails = () => {
    const { refetch } = useContext(AuthContext);
    const detail = useLoaderData();
    const [toggle, setToggle] = useState(false);

    const { name, price, description, img, how_it_fits, ratings, product_details } = detail;

    const { data: limitedData = [], isLoading } = useQuery({
        queryKey: ['limitedData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/shop2');
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading />
    }

    const handleAddProduct = () => {
        const productDetail = { name, price, description, img, how_it_fits, ratings, product_details };
        fetch('http://localhost:5000/addProducts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged > 0) {
                    toast.success('Products added to carts');
                    refetch();
                }
            })

    }


    return (
        <section className='bg-white pt-6'>
            <div className='max-w-6xl mx-auto lg:pb-40  py-20 px-5 sm:px-9 md:px-12 lg:px-16 xl:px-0'>
                <div className='flex flex-col lg:flex-row lg:justify-between'>
                    <div className=' flex flex-col lg:w-[55%] mb-9 lg:mb-0'>
                        <img src={img} alt="" className='bg-[#dce5e4] rounded-3xl' />
                        <div className=' flex'>
                            {
                                limitedData.map(product => <div key={product._id}>
                                    <img src={product.img} alt="" className=' bg-[#dce5e4] w-[70%] mt-7 lg:mx-auto rounded-xl' />
                                </div>)
                            }
                        </div>
                    </div>
                    <div className=' lg:w-[40%]'>
                        <h3 className=' text-3xl text-dark font-medium'>{name}</h3>
                        <div className='flex flex-row items-center  my-5'>
                            <p className=' py-1 px-3 border-[2px] border-primary inline-block rounded-xl mr-6'>{price}</p>
                            <div className=' border-l border-primary flex items-center'>
                                <img src={star} alt="" className='w-5 ml-4 mr-2' />
                                <p className='text-dark text-sm'>{ratings}</p>
                                <p className='mx-2'>·</p>
                                <p className='text-dark text-sm'>142 Reviews</p>
                            </div>
                        </div>
                        <div className='my-7'>
                            <div className='flex'>
                                <button className='btn btn-secondary rounded-full md:w-40 w-30 shadow-xl text-black normal-case mr-5' onClick={handleAddProduct}><img src={bag} alt="" className='w-6 mr-2' /> Add to cart</button>
                                <Link to='/cart'><button className='btn btn-dark rounded-full md:w-40 w-30 shadow-xl text-white normal-case' onClick={handleAddProduct}><img src={buyIcon} alt="" className='w-6 mr-2' /> Buy now</button></Link>
                            </div>
                        </div>
                        <hr className=' border-1 border-[#adadad]' />
                        <div>
                            <div className=' my-6'>
                                <div className=' flex flex-row justify-between bg-[#fafafa] rounded-xl p-2 cursor-pointer'>
                                    <h4 className=' text-sm text-dark font-semibold'>Description</h4>
                                    <img src={toggle ? plus : minus} alt="" className='w-5 object-contain cursor-pointer opacity-70' onClick={() => setToggle((previous) => !previous)} />
                                </div>
                                <p className=' text-sm text-dark p-3 opacity-90'>{description}</p>
                            </div>
                            <div className=' my-6'>
                                <div className=' flex flex-row justify-between bg-[#fafafa] rounded-xl p-2 cursor-pointer'>
                                    <h4 className=' text-sm text-dark font-semibold'>How It Fits</h4>
                                    <img src={toggle ? plus : minus} alt="" className='w-5 object-contain cursor-pointer opacity-70' onClick={() => setToggle((previous) => !previous)} />
                                </div>
                                <p className=' text-sm text-dark p-3 opacity-90'>{how_it_fits}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='bg-[#FEF2F2] p-4 rounded-xl'>
                                <img src={truck} alt="" className=' mb-2' />
                                <h4 className=' text-dark text-sm font-medium mb-2'>Fast and Free Shipping</h4>
                                <p className='text-[#727272] text-sm'>On orders over $50.00</p>
                            </div>
                            <div className=' bg-[#f0fdf4] p-4 rounded-xl'>
                                <img src={bags} alt="" className=' mb-2' />
                                <h4 className=' text-dark text-sm font-medium mb-2'>Easy to Shop</h4>
                                <p className='text-[#727272] text-sm'>Just phone number</p>
                            </div>
                            <div className='bg-[#f0f9ff] p-4 rounded-xl'>
                                <img src={support} alt="" className=' mb-2' />
                                <h4 className=' text-dark text-sm font-medium mb-2'>24/7 Support</h4>
                                <p className='text-[#727272] text-sm'>We provide 24/7 support.</p>
                            </div>
                            <div className='bg-[#fffbeb] p-4 rounded-xl'>
                                <img src={easyReturn} alt="" className=' mb-2' />
                                <h4 className=' text-dark text-sm font-medium mb-2'>Hassle Free Returns</h4>
                                <p className='text-[#727272] text-sm'>Hassle free return</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-16'>
                    <h4 className=' text-2xl text-dark font-semibold'>Product Details</h4>
                    <p className='text-dark text-sm opacity-90 mt-6'>{product_details}</p>
                </div>
            </div>
        </section>
    );
};

export default ProductsDetails;