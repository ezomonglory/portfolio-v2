import React from "react";
import { works } from "../data";
import WorksItems from "./WorksItems";

const Works = () => {
	return (
		<div>
			<div className=" md:w-[50%] mt-[60px] md:mt-[132px] md:mb-[80px] mb-[40px]">
				<h1 className="text-[32px] tracking-[-1px] leading-[36px] md:text-[64px] md:leading-[60px] md:tracking-[-2px] text-[#202020] recolmd">Recent</h1>
				<h1 className="text-[32px] tracking-[-1px] leading-[36px] md:text-[64px] md:leading-[60px] md:tracking-[-2px] text-[#202020] recolmd">
					Projects <span className="text-[#606060] text-[16px]">(20-23)</span>
				</h1>
				<p className="sm:text-[20px] sm:leading-[24px] text-[#606060] text-[16px] leading-[20px] recolmd">
					The selected projects showcased here encompass a diverse range of
					exploratory , Collaborative and clients owned works.
				</p>
			</div>
            <div className="flex flex-col space-y-[32px] md:space-y-[72px]">
                {works.map((work,i)=> (
                    <WorksItems work={work} i={i} key={i} />
                ))}
            </div>
		</div>
	)
};

export default Works;