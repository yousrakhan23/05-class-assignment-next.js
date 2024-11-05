import Image from 'next/image';
import heart_image from '../public/images/heart.png';
import profile_image from '../public/images/profile.png';
import cart_icon from   '../public/images/cart.png';

import { Rye } from '@next/font/google';
const fontRye = Rye({ weight: '400', subsets: ['latin'] });
const Navbar = () => {
    return (

        <div className='w-full h-full'>
            <nav className="navbar bg-[#A29875] w-auto h-auto flex items-center justify-between pr-9 ">

                <h1 className={`${fontRye.className} text-[65px] leading-[93.75px] text-[#FFFFFF] h-[94px] w-[439px] pt-[6px] pl-[36px] md:leading-snug`}>MANZZARI</h1>
                <div className='flex items-center space-x-9'>
                <div className='h-10 w-[700px] bg-[#F8F8F8] flex items-center rounded-xl px-9 '>
                    <input type="text" className="h-full w-full bg-[#f8f8f8] focus:outline-none" placeholder="Search for Gold Jewellery, Diamond Jewellery and more..." />
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>
                <div className='flex gap-4 items-center'>
                        <Image src={heart_image} alt='heart' className='w-[33.42px] h-[29.71px]'/>
                        <Image src={profile_image} alt='profile' className='w-[28.97px] h-[29.26px]'  />
                        <Image src={cart_icon} alt='cart' className='w-[38.01px] h-[30.08px]'/>

                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;



