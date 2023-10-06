import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const WorksItems = ({work, i}) => {
  return (
   <motion.a className='cursor-pointer anim' href=""
   initial={{y:"60px"}}
   whileInView={{y:"0px"}}
   >
     <div className={`${i === 4 ? "flex justify-between border-transparent border-[0.5px] border-y-[#9F9F9F] pt-[24px] pb-[60px] items-center" : "flex justify-between border-transparent border-[0.5px] border-t-[#9F9F9F] items-center pt-[24px]"}`}>
        <div className='flex space-x-[24px] md:space-x-[64px] items-center'>
            <p className='md:text-[20px] text-[12px] text-black neuereg'>{work.number}</p>
            <h1 className='text-[#606060] md:text-[40px] text-[20px] neuereg md:leading-[48px]'>{work.name}</h1>
        </div>

        <Image src='/Frame.svg' alt='arrow' width={56} height={56} className='hidden md:block'/>
        <Image src='/Frame.svg' alt='arrow' width={32} height={32}  className='md:hidden'/>
    </div>
   </motion.a>
  )
}

export default WorksItems