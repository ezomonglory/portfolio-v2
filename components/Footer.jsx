import Image from "next/image";
import React, { useEffect, useState } from "react";

const Footer = () => {
	const [date, setDate] = useState(new Date());
	const getDate = () => {
		setDate(new Date());		
	};

    const Minutes = () => {
        if(date){
          const minute =  date.getMinutes()
          const string = minute.toString()
          if(string.length === 1){
           return `0${string}`
          }else{
           return string
          }
        }
      }
   

	useEffect(() => {
		setInterval(() => {
			getDate();
		}, 6000);
	}, [date]);
	return (
		<div className='flex  justify-between mb-[2rem] mt-[32px] md:mt-[80px] '>
			<div className='flex flex-col space-y-[16px] md:space-y-0 md:flex-row md:space-x-[32px] neuereg'>
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
				<p className='text-[14px] neuereg'>
					
					<span className='text-[14px] text-[#7D7D7D] mt-4'>
						Benin,NG
					</span>
                    {" "}
                    {date?.getHours()}:{Minutes()}{" "}
				</p>
				
			</div>

			<p className='text-[14px] text-[#7D7D7D] hidden md:block  neuereg'>
				{" "}
				Designed by David Otu{" "}
			</p>

           <div className="md:hidden flex flex-col space-y-[16px] items-right justify-end">
           <div className='flex space-x-2 justify-end '>
            <Image
					src='/heart.svg'
					width={20}
					height={20}
					alt='music-icon'
					className=''
				/>
				<p className='text-[14px] neuereg '>
					
					<span className='text-[14px] text-[#7D7D7D] mt-4 neuereg'>
						Benin,NG
					</span>
                    {" "}
                {date?.getHours()}:{Minutes()}{" "}
				</p>
				
			</div>

			<p className='text-[14px] text-right text-[#7D7D7D] md:hidden block neuereg'>
				{" "}
				Designed by David Otu{" "}
			</p>
           </div>
		</div>
	);
};

export default Footer;
