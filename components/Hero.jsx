import React from "react";

function Hero() {
	return (
		<div className=' h-[100vh] md:h-[800px] relative     '>
			<div className='bg-[#111821] lg:pt-[50px] xl:pt-[56px] pt-[40px] md:pt-[50px] px-[25px] lg:px-[90px] xl:px-[100px] 2xl:px-[118px] h-[80vh]  md:h-[750px]  mt-[32px] w-full b'>
				<div className='overflow-hidden'>
					<h1 className='w-full text-[48px] md:text-[90px] lg:text-[90px] xl:text-[100px] 2xl:text-[120px] text-white text-center tracking-[-2px] md:leading-[90px] leading-[60px] md:tracking-[-4%] lg:leading-[90px] xl:leading-[110px] mb-[20px] md:mb-[48px] sm:text-[70px] recolreg bg-yellow500 scaleUp'>
						NEED A FRONTEND DEVELOPER?
					</h1>
				</div>

				<div className='  md:absolute right-0 bottom-0 flex flex-col md:flex-row  md:pt-[2px]  px-[25px] lg:px-[90px] xl:px-[100px] 2xl:px-[118px] justify-between items-center md:items-start w-[95%] bg-red500'>
					<div className=' w-full md:w-[50%]   2xl:w-[30%] flex flex-col items-center md:items-start moveUp '>
						<p className=' text-[#DFDFDF] md:text-[20px] md:leading-[32px] text-[14px] leading-[24px] text-center md:text-left neuereg  '>
                        Hello, I’m Ezomon Glory, a Nigerian <br className='hidden md:block' />
                         based developer who uses <br className='hidden md:block' /> different tools to provide human  <br className='hidden md:block' />friendly, digital and interactive <br className='hidden md:block' /> website experience for users.

							{/* About me: I am Ezomon Glory, <br className='hidden md:block' /> a
							lagos, Nigerian based <br className='hidden md:block' />
							developer who uses different <br className='hidden md:block' />{" "}
							tools to provide human friendly,{" "}
							<br className='hidden md:block' />
							digital and interactive website <br className='hidden md:block' />{" "}
							experience for users. */}
						</p>
						<div className='bg-[#DE3F3B]  text-white px-[64px] py-[12px] md:px-[32px] text-[16px] md:text-[20px] md:leading-[32px] leading-[24px]  inline-block rounded-full mt-[24px] neuereg '>
							Hire me
						</div>
					</div>
					<div className='relative md:overflow-hidden imgwidth w-[260px] h-[300px] md:w-[300px] md:h-[350px] xl:w-[398px] xl:h-[430px] b'>						
						<div className='bg-[#D9D9D9] mt-[40px] md:mt-0 mx-auto imgwidth w-[260px] h-[300px] md:w-[300px] md:h-[350px] xl:w-[398px] xl:h-[430px] moveDown '
                        style={{
                            backgroundImage:'url("/eg2.JPG")',
                            backgroundPosition:"top",
                            backgroundSize:"cover",
                        }}
                        ></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
