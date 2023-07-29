import React from "react";

const About = () => {
	return (
		<div className='pt-[80px] md:pt-[120px]'>
			<h1 className='text-[#202020] text-[32px] leading-[36px] tracking-[-1px] md:text-[64px] md:leading-[76px] md:tracking-[-2px] mb-[40px] md:mb-[80px] w-[90%] recolmd'>
				Your friendly neighbourhood <br className="hidden md:block"/>
				<span className='text-[#9F9F9F]'>
					<strike>Spiderman</strike>
				</span>{" "}
				web dev.
			</h1>

			<div className='flex flex-col md:flex-row justify-between'>
				<div className='bg-[#D9D9D9] w-[180px] h-[164px] md:w-[240px] md:h-[200px] mb-[24px]'></div>

				<div className=" w-full md:w-[50%]">
					<div className=' border-transparent border-[0.5px] border-b-[#9F9F9F] pb-[16px]'>
						<h1 className='text-[#606060] text-[20px] md:text-[24px] md:leading-[40px] leading-normal md:tracking-[0.5px] mb-[10px] recolmd'>
							Technologies
						</h1>

						<p className='text-[#202020] text-[16px] md:text-[24px] md:leading-[32px] leading-[24px] neuereg'>
							Js react, nextjs, typrscript, tailwind, HTML & CSS
						</p>
					</div>

					<div className=' border-transparent border-[0.5px] border-b-[#9F9F9F] pb-[16px] mt-[32px]'>
						<h1 className='text-[#606060] text-[20px] md:text-[24px] md:leading-[40px] leading-normal md:tracking-[0.5px] mb-[10px] recolmd'>
							Personal Interest
						</h1>

						<p className='text-[#202020] text-[16px] md:text-[24px] md:leading-[32px] leading-[24px] neuereg'>
							I thrive on a vibrant blend of movies, music, conversations and
							video games. Its my perfect recipe for a good time.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
