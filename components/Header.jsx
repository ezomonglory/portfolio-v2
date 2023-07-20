import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<div className='md:bg-[#EAE8E4] md:px-[80px] px-[20px] pt-[30px]'>
			<div className='flex justify-between border-transparent border-2 border-b-[#9F9F9F] pb-[30px] items-center ' >
				<Image src='/logo.svg' height={32} width={53} alt='logo' />
				<ul className=' space-x-[48px] items-center hidden md:flex'>
					<li className='text-[16px] text-[#202020]'>WORK</li>
					<li className='text-[16px] text-[#202020]'>RESUME</li>
					<li className='text-[16px] text-[#202020]'>ABOUT ME</li>
				</ul>

				<h1 className='text-[16px] text-[#202020] hidden md:block'>CONTACT ME</h1>

                <Image src='/menu.svg' width={32} height={32} alt='menu' className="block md:hidden" />
			</div>
		</div>
	);
};

export default Header;
