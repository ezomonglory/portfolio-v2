import Image from "next/image";
import React, { useEffect, useState } from "react";


const Footer = () => {
	const [date, setDate] = useState(new Date());
	const getDate = () => {
		setDate(new Date());
		console.log(date?.getMinutes(), date?.getHours());
	};

	useEffect(() => {
		setInterval(() => {
			getDate();
		}, 6000);
	}, [date]);
	return (
		<div className='flex  justify-between mb-[2rem] mt-[80px] '>
			<div className='flex flex-col md:flex-row md:space-x-[32px]'>
				<a>
					<h1 className=''>Github</h1>
				</a>
				<a>
					<h1 className=''>Linkedln</h1>
				</a>
				<a>
					<h1 className=''>Send a mail</h1>
				</a>
			</div>

			<div className='space-x-2  hidden md:flex'>
            <Image
					src='/heart.svg'
					width={20}
					height={20}
					alt='music-icon'
					className=''
				/>
				<p className='text-[14px] '>
					
					<span className='text-[14px] text-[#7D7D7D] mt-4'>
						Benin,NG
					</span>
                    {" "}
                    {date?.getHours()}:{date?.getMinutes()}{" "}
				</p>
				
			</div>

			<p className='text-[14px] text-[#7D7D7D] hidden md:block '>
				{" "}
				Designed by David Otu{" "}
			</p>

           <div className="md:hidden flex flex-col items-right justify-end">
           <div className='flex space-x-2 '>
            <Image
					src='/heart.svg'
					width={20}
					height={20}
					alt='music-icon'
					className=''
				/>
				<p className='text-[14px] '>
					
					<span className='text-[14px] text-[#7D7D7D] mt-4'>
						Benin,NG
					</span>
                    {" "}
                    {date?.getHours()}:{date?.getMinutes()}{" "}
				</p>
				
			</div>

			<p className='text-[14px] text-[#7D7D7D] md:hidden block '>
				{" "}
				Designed by David Otu{" "}
			</p>
           </div>
		</div>
	);
};

export default Footer;
