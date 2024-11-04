"use client";

import Image from 'next/image';
import hero_section_jew from '../public/images/slider-1.jpg.png'
import { Libre_Bodoni } from '@next/font/google';

const fontLibreBodoni = Libre_Bodoni({ weight: '700', subsets: ['latin'] });

const HeroSection = () => {
    return (
        <div className='flex items-center justify-between px-16 py-12'>
            <div className="w-[496px] h-[189px] pt-[316px] pl-[176px] ">
                <h1 className={`${fontLibreBodoni.className} font-weight-[700] text-[40px] leading-[65.8px] tracking-[2.5%] text-[#000000]`}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                <p className={`${fontLibreBodoni.className} w-[902px] h-[147px] font-weight-[500] text-[30px] leading-[49.35px] tracking-[2.5%] text-[#787054] `}>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our <br /> desirable collection.</p>


                <div className='w-[239px] h-[58px] gap-[10px] radius-[10px] bg-[#A29875] p-[10px] ml-[17px] mt-[78px] rounded-lg text-center  '>
                    <button className={`${fontLibreBodoni.className} font-weight-[500] text-[30px] tracking-[-1px] text-[#FFFFFF] w-[177px] h-[38px] `}>Explore Now</button>
                </div>
            </div>

            <div className='w-1/2'>
                <Image src={hero_section_jew} alt='hero-section' className='w-[490px] h-[667px] ' />
            </div>


        </div>
    )
}
export default HeroSection;