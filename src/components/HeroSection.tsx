import Image from 'next/image';
import hero_section_jew from '../public/images/hero_img.png';
import hero_layer_image from '../public/images/hero_img_layer.png'
import { Libre_Bodoni } from '@next/font/google';

const fontLibreBodoni = Libre_Bodoni({ weight: '700', subsets: ['latin'] });

const HeroSection = () => {
    return (
        <div className='flex items-center justify-between px-16 py-12'>

            <div className="w-[496px] h-[189px] p-4 flex flex-col gap-10 justify-center">
                <h1 className={`${fontLibreBodoni.className} font-weight-[700] text-[40px] leading-[65.8px] tracking-[2.5%] text-[#000000] top-[316px] left-[176px]`}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                <p className={`${fontLibreBodoni.className} w-[902px] h-[147px] font-weight-[500] text-[30px] leading-[49.35px] tracking-[2.5%] text-[#787054] `}>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our <br /> desirable collection.</p>
                
                <div className='w-[247.67px] h-[49.2px] radius-[8.6px] gap-[8.6px] bg-[#A29875] p-[8.6px] top-[710.32px] left-[107.49px] rounded-lg text-center  '>
                    <button className={`${fontLibreBodoni.className} font-weight-[500] text-[25.8px] tracking-[-1px] text-[#FFFFFF] w-[153px] h-[32px] `}>Explore Now</button>
                </div>
            </div>

            <div className='relative '>
                <Image src={hero_section_jew} alt='hero-section' className=' w-[421px] h-[573.59px]'/>
                <Image src={hero_layer_image} alt='hero-layer' layout='fill' objectFit='cover' className='absolute top-[276.91px] left-[977.77px] pointer-events-none p-[12px] border-[#FFFFFF] rounded-t-full-[128.99px] rounded-b-full-[128.99px] w-[380.1px] h-[525.43px]' />
            </div>


        </div>
    )
}
export default HeroSection;


