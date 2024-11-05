"use client";
import Image from 'next/image';
import heart_image from '../public/images/heart.png';
import profile_image from '../public/images/profile.png';
import cart_icon from '../public/images/cart.png';
import { Rye } from '@next/font/google';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
const fontRye = Rye({ weight: '400', subsets: ['latin'] });
const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (

        <div className='w-full h-full'>
            <nav className="navbar bg-[#A29875] w-auto h-auto flex items-center justify-between pr-9 ">
            
                <h1 className={`${fontRye.className} text-3xl text-[#FFFFFF] md:text-[65px] md:leading-[93.75px]  pl-[36px] pt-[6px] `}>MANZZARI</h1>
                <div className='hidden md:flex items-center space-x-9'>
                    <div className='h-10 w-[700px] bg-[#F8F8F8] flex items-center rounded-xl px-9 '>
                        <input type="text" className="h-full w-full bg-[#f8f8f8] focus:outline-none" placeholder="Search for Gold Jewellery, Diamond Jewellery and more..." />
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                    <div className='flex gap-4 items-center'>
                        <Image src={heart_image} alt='heart' className='w-[33.42px] h-[29.71px]' />
                        <Image src={profile_image} alt='profile' className='w-[28.97px] h-[29.26px]' />
                        <Image src={cart_icon} alt='cart' className='w-[38.01px] h-[30.08px]' />

                    </div>
                </div>
                <RxHamburgerMenu onClick={() => setOpen(!open)} className='text-[#0c0c0c] w-8 h-8 cursor-pointer md:hidden' />
            </nav>
            {open && (
                <div className="md:hidden z-10 fixed top-0 left-0 w-full h-full bg-gray-400/10 backdrop-blur-xl flex flex-col items-center p-4">
                    <div className="flex justify-between w-full mb-8">
                        <h1 className={`${fontRye.className} text-3xl text-[#FFFFFF]`}>
                            MANZZARI
                        </h1>
                        <button onClick={() => setOpen(false)} className="text-[#080808]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex flex-col items-center space-y-4">
                        <div className="h-10 w-full bg-[#F8F8F8] flex items-center rounded-xl px-4">
                            <input
                                type="text"
                                className="h-full w-full bg-[#f8f8f8] focus:outline-none"
                                placeholder="Search for Gold Jewellery, Diamond Jewellery and more..." />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <div className="flex gap-4 items-center">
                        <Image src={heart_image} alt='heart' className='w-[33.42px] h-[29.71px]' />
                        <Image src={profile_image} alt='profile' className='w-[28.97px] h-[29.26px]' />
                        <Image src={cart_icon} alt='cart' className='w-[38.01px] h-[30.08px]' />
                        </div>
                    </div>
                </div>

            )}

        </div>
    );
}
export default Navbar;



