import Image from "next/image";
import React, { useEffect, useState } from "react";

const Footer = ({color}) => {
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

      const Hours = () => {
        if(date){
          const minute =  date.getHours()
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
		<div className='flex  justify-between  '>
			<div className='flex flex-col space-y-[16px] md:space-y-0 md:flex-row md:space-x-[32px] neuereg'>
				<a
                href="https://github.com/ezomonglory"
                target="_blank"
                >
					<h1 className={` ${color ? color : ""} `}>Github</h1>
				</a>
				<a
                href="https://www.linkedin.com/in/glory-ezomon-3b444222b/"
                target="_blank"
                >
					<h1 className={` ${color ? color : ""} `}>Linkedln</h1>
				</a>
				<a
                href="mailto:ezomonglory01@gmail.com"
                >
					<h1 className={` ${color ? color : ""} `}>Send a mail</h1>
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
				<p className={`text-[14px] neuereg ${color && color} `}>
					
					<span className={`text-[14px] mt-4 ${color ? color : "text-[#7D7D7D] "} `}>
						Benin,NG
					</span>
                    {" "}
                    {Hours()}:{Minutes()}{" "}
				</p>
				
			</div>

			<p className={`text-[14px] ${color ? color : "text-[#7D7D7D] "} hidden md:block  neuereg`}>
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
				<p className={`text-[14px] neuereg ${color ?color : ""} `}>
					
					<span className={`text-[14px]  mt-4 neuereg  ${color ? color : "text-[#7D7D7D] "} `}>
						Benin,NG
					</span>
                    {" "}
                {Hours()}:{Minutes()}{" "}
				</p>
				
			</div>

			<p className={`text-[14px] text-right text-[#7D7D7D] md:hidden block neuereg  ${color ? color : "text-[#7D7D7D] "} `}>
				{" "}
				Designed by David Otu{" "}
			</p>
           </div>
		</div>
	);
};

export default Footer;
