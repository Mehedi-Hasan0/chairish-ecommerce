import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import users from '../../assets/user.svg';
import cart from '../../assets/cart.svg';
import menu from '../../assets/icon/menu.svg';
import close from '../../assets/icon/close.svg';
import { AuthContext } from '../../context/AuthProvider';
import NavCart from './NavCart/NavCart';

const Navbar = () => {
    const { user, logout, cartProducts, setCartProducts } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <nav className=' bg-primary py-2 '>
            <div className=' lg:flex hidden justify-between items-center max-w-6xl lg:mx-16 xl:mx-auto'>
                <Link className='text-3xl font-semibold text-white' to='/'>Chairish</Link>
                <div className='nav_link text-white'>
                    <Link className='text-sm nav-link nav-link-ltr' to='/'>Home</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/shop'>Shop</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/aboutus'>About Us</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/services'>Services</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/blog'>Blog</Link>
                    <Link className='text-sm nav-link nav-link-ltr' to='/contactus'>Contact Us</Link>
                </div>
                <div className='flex w-16 justify-between'>
                    {/* user icon functionalities */}
                    <div className="dropdown dropdown-left dropdown-hover">
                        <label tabIndex={0} className=""><Link><img src={users} alt="" /></Link></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user?.email ?
                                    <li><Link to='/login' onClick={handleLogout}>Sign out</Link></li>
                                    :
                                    <>
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/signup'>Sign Up</Link></li>
                                    </>
                            }

                        </ul>
                    </div>
                    {/* cart functionalities */}
                    <div className="dropdown dropdown-end dropdown-hover">
                        <label tabIndex={0} className=""><img src={cart} alt="cart" className='cursor-pointer' /></label>
                        <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[450px]">
                            {
                                user?.email ?
                                    <div className='flex flex-col'>
                                        {
                                            cartProducts.map((products, i) => <NavCart key={i} products={products} />)
                                        }
                                        <div className='my-7 mx-auto'>
                                            <div className='flex'>
                                                <Link to='/cart'>
                                                    <button className='btn bg-[#ffff] hover:bg-white border rounded-full md:w-40 w-30 shadow-xl text-black normal-case mr-5'> View cart</button>
                                                </Link>
                                                <Link to='/cart'><button className='btn btn-dark rounded-full md:w-40 w-30 shadow-xl text-white normal-case'> Checkout</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <li><p className='flex justify-center items-center'>Please Log in first!</p></li>
                                    </>
                            }

                        </div>
                    </div>

                </div>
            </div>

            <div className='lg:hidden flex items-center justify-between py-3 px-5 sm:px-9 md:px-12'>
                <Link className='text-2xl font-semibold text-white' to='/'>Chairish</Link>
                <img src={toggle ? close : menu} alt='menu' className='w-6 object-contain cursor-pointer opacity-70' onClick={() => setToggle((previous) => !previous)} />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-14 right-0 w-full h-full flex-col opacity-100`}>
                    {/* <img src={toggle ? close : menu} alt='menu' className='w-6 object-contain mb-7 cursor-pointer' onClick={() => setToggle((previous) => !previous)} /> */}
                    <div className='flex flex-col md:text-lg text-base z-50 bg-primary w-full relative text-center justify-between h-36'>

                        <Link className='text-base nav-link-mobile text-white' to='/'>Home</Link>
                        <Link className='text-base nav-link-mobile text-white' to='/shop'>Shop</Link>
                        <Link className='text-base nav-link-mobile text-white' to='/aboutus'>About Us</Link>
                        <Link className='text-base nav-link-mobile text-white' to='/services'>Services</Link>
                        <Link className='text-base nav-link-mobile text-white' to='/blog'>Blog</Link>
                        <Link className='text-base nav-link-mobile text-white' to='/contactus'>Contact Us</Link>
                        <div className='flex w-16 justify-between mx-auto mt-3'>
                            <div className="dropdown dropdown-bottom dropdown-hover">
                                <label tabIndex={0}><Link><img className=' cursor-pointer' src={users} alt="user" /></Link></label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-dark">
                                    {
                                        user?.email ?
                                            <li><Link to='/login' className=' text-dark' onClick={handleLogout}>Sign out</Link></li>
                                            :
                                            <>
                                                <li><Link to='/login' className=' text-dark'>Login</Link></li>
                                                <li><Link to='/signup' className=' text-dark'>Sign Up</Link></li>
                                            </>
                                    }
                                </ul>
                            </div>
                            <img className=' cursor-pointer' src={cart} alt="cart" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;