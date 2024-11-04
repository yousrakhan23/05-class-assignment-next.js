import { Rye } from '@next/font/google';
const fontRye = Rye({ weight: '400', subsets: ['latin'] });
const Navbar = () => {
    return (

        <div className='w-full h-full'>
            <nav className="navbar bg-[#A29875] w-screen h-auto ">
                <h1 className={`${fontRye.className} text-[65px] leading-[93.75px] text-[#FFFFFF] h-[94px] w-[439px] pt-[6px] pl-[36px]`}>MANZZARI</h1>
            </nav>
        </div>
    );
}
export default Navbar;



