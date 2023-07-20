import React from "react";

function Hero() {
	return (
		<div className=' h-[100vh] md:h-[100vh]  xl:h-[120vh] relative'>
			<div className='bg-[#111821] lg:pt-[50px] xl:pt-[56px] pt-[40px] md:pt-[50px] px-[25px] lg:px-[90px] xl:px-[100px] 2xl:px-[118px] h-[80vh] md:h-[90vh] xl:h-[100vh]  mt-[32px]'>
				<h1 className='w-full text-[48px] md:text-[90px] lg:text-[90px] xl:text-[120px] 2xl:text-[120px] text-white text-center tracking-[-2px] md:leading-[90px] leading-[60px] md:tracking-[-4px] lg:leading-[90px] xl:leading-[124px] mb-[20px] md:mb-[48px] sm:text-[70px]'>
					NEED A FRONTEND DEVELOPER?
				</h1>

				<div className=' md:absolute right-0 bottom-0 flex flex-col md:flex-row  md:pt-[80px]  px-[25px] lg:px-[90px] xl:px-[100px] 2xl:px-[118px] justify-between items-center md:items-start '>
					<div className=" w-full md:w-[50%]  2xl:w-[30%] flex flex-col items-center md:items-start ">
						<p className=' text-[#DFDFDF] md:text-[20px] md:leading-[32px] text-[14px] leading-[24px] text-center md:text-left'>
							About me: I am Ezomon Glory, a lagos, Nigerian based developer who
							uses different tools to provide human friendly, digital and
							interactive website experience for users.
						</p>
						<div className='bg-[#DE3F3B] text-white px-[64px] py-[12px] md:px-[32px] text-[16px] md:text-[20px] md:leading-[32px] leading-[24px]  inline-block rounded-full mt-[24px]'>
							Hire me
						</div>
					</div>
					<div className='bg-[#D9D9D9] mt-[40px] md:mt-0 mx-auto w-full h-[300px] md:w-[300px] md:h-[350px] xl:w-[398px] xl:h-[430px] '></div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
