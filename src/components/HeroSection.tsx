import Image from 'next/image';
import hero_section_jew from '../public/images/hero_img.png';
import hero_layer_image from '../public/images/hero_img_layer.png'
import { Libre_Bodoni } from '@next/font/google';

const fontLibreBodoni = Libre_Bodoni({ weight: '700', subsets: ['latin'] });

const HeroSection = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-8 md:py-12 gap-8'>

            <div className="flex-1 flex flex-col gap-6 md:gap-10 text-center md:text-left max-w-xl">
                <h1 className={`${fontLibreBodoni.className} font-weight-[700] text-[40px] leading-[65.8px] tracking-[2.5%] text-[#000000] top-[316px] left-[176px]  md:text-4xl lg:text-5xl`}>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                <p className={`${fontLibreBodoni.className} text-lg md:text-xl lg:text-2xl text-[#787054] `}>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
                
                <div className='mt-4 '>
                    <button className={`${fontLibreBodoni.className} bg-[#A29875] text-white py-2 px-6 rounded-md text-lg md:text-xl`}>Explore Now</button>
                </div>
            </div>

            <div className='relative'>
                <Image src={hero_section_jew} alt='hero-section' className=' w-[421px] h-[573.59px]'/>
                <Image src={hero_layer_image} alt='hero-layer' layout='fill' objectFit='cover' className='absolute top-[256.91px] left-[877.77px] pointer-events-none p-[12px] border-[#FFFFFF] rounded-t-full-[128.99px] rounded-b-full-[128.99px] w-[380.1px] h-[525.43px] md:h-[525px] md:w-[380px]' />
            </div>


        </div>
    )
}
export default HeroSection;


