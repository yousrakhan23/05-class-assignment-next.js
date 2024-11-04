"use client";

import { Rye } from '@next/font/google';
const fontRye = Rye({ weight: '400', subsets: ['latin'] });
const Navbar = () => {
    return (
        
            <div>
                <nav className="navbar bg-[#A29875] w-[1920px] h-[134px] ">
                    <h1 className={`${fontRye.className} text-[75px] leading-[93.75px] text-[#FFFFFF] h-[94px] w-[439px] pt-[20px] pl-[36px]`}>MANZZARI</h1>
                </nav>
            </div>
              
        
    )
}
export default Navbar;