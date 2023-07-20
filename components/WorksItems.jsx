import Image from 'next/image'
import React from 'react'

const WorksItems = ({work, i}) => {
  return (
   <a className='cursor-pointer ' href="">
     <div className={`${i === 4 ? "flex justify-between border-transparent border-2 border-y-[#9F9F9F] items-start pb-[40px]" : "flex justify-between border-transparent border-2 border-t-[#9F9F9F] items-start pt-[24px]"}`}>
        <div className='flex space-x-[24px] md:space-x-[64px] items-start'>
            <p className='md:text-[20px] text-[12px] text-black '>{work.number}</p>
            <h1 className='text-[#606060] md:text-[40px] text-[20px]'>{work.name}</h1>
        </div>

        <Image src='/Frame.svg' alt='arrow' width={56} height={56} className='hidden md:block'/>
        <Image src='/Frame.svg' alt='arrow' width={32} height={32}  className='md:hidden'/>
    </div>
   </a>
  )
}

export default WorksItems