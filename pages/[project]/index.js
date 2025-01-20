import React, { useEffect, useRef } from "react";
import Footer from '../../components/Footer'

const index = () => {


	const marqueeRef = useRef();
	const marqueeRef2 = useRef();

  const addText = () => {
		marqueeRef?.current?.insertAdjacentHTML(
			"beforeend",
			"FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORYFULLSTACK DEVELOPER - EZOMON GLORY",
		);

    marqueeRef2?.current?.insertAdjacentHTML(
			"afterbegin",
			"GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT MEGOT A GIG FOR ME? - CONTACT ME",
		);
	
	};



	useEffect(() => {
		setInterval(() => {
			addText();
		}, 3000);
	});


  const data = [
    {
      title:"Responsibilities",
      list:[
        "Designed and developed RESTful APIs for core platform functionalities, including user registration, content upload, and forum management using Node.js, TypeScript, and Express.js.",
        "Integrated Stripe for secure payment processing, enabling premium subscriptions and campaign contributions.",
        "Implemented real-time features using Redis for notifications, chat systems, and post interactions (likes, comments, and shares).",
        "Developed advanced forum functionalities, including user-generated threads, image uploads, post favorites, and blocking features.",
        "Built and optimized the admin dashboard to provide analytics on user activity, including most-liked posts and engagement metrics.",
        "Ensured seamless CI/CD pipelines with GitHub Actions and deployed scalable services to Azure.",
        "Collaborated with a cross-functional team to design database schemas for efficient content storage and retrieval."
      ]
    },
    {
      title:"Key Acheivements",
      list:[
        "Improved API response times by 40% through query optimization and caching strategies.",
        "Streamlined deployment processes, reducing downtime to under 1%.",
      ]
    },
    {
      title:"Technologies",
      list:[
        "Node.js",
        "Express.js",
        "TypeScript",
        "SQL",
        "PostgreSQL",
        "Redis",
        "Stripe",
        "Azure",
        "GitHub Actions",
      ]
    }
  ]


  return (
    <div className='overflow-hidden'>
       <div className='md:w-[90%] mx-auto '>
       <div className='h-[48px] mt-[52px] flex items-center justify-between'>
            <div className='flex iteems-center space-x-[12px]'>
                <div className=' h-[48px] py-[10px] bg-[#DE3F3B] rounded-full px-[16px] '>
                    <span>

                    </span>
                    <h2 className='neuemd text-[18px] text-white'>Return</h2>
                </div>
                <div className=' h-[48px] py-[10px] bg-[#DE3F3B] rounded-full px-[24px] '>     <h2 className='neuemd text-[18px] text-white'>Next project </h2></div>
            </div>

            <h2 className=' neuemd text-[#202020] underline '>LETS TALK!</h2>
        </div>



        <div className='md:mt-[105px] flex  items-center justify-between'>
            <div className='w-full'>
                <h2 className='recolreg md:tracking-[-1.4px] text-[#111821] md:text-[100px]  capitalize '>Dream planet</h2>
                <div className='flex items-center space-x-[8px] w-full'>
                  { ["Typescript", "SQL"].map((data)=>(
                    <div className='min-w-[146px] w-fit  h-[48px] border border-[#C0C0C0] flex items-center justify-center rounded-full border-[1.2px]'>
                        <h2 className='neuereg md:text-[20px] text-[#111821]'>{data}</h2>
                    </div>
                  ))}
                </div>
            </div>
            <div className='w-[160px] h-[160px] shrink-0  flex items-center justify-center hover:border hover:border-[#DE3F3B] rounded-full bg-[#DE3F3B] hover:bg-transparent cursor-pointer '>
                  <span className='neuemd text-white md:text-[16px] text-center'>Visit <br/> Website</span>
            </div>
        </div>
       </div>


      
      <div className='bg-[#111821] w-full rounded-t-[24px] mt-[104px]  px-[120px] py-[140px] flex   overflow-scroll' >
          <div className='flex flex-col space-y-[14px] md:w-[40%] shrink-0 sticky top-0 '>
           { ["Overview", "Responsibilities", "Key Acheivements", "Technologies"].map((data)=>(
              <div className='flex items-center space-x-[8px] '>
                <span className={` h-[6px] w-[6px] rounded-full ${false ? "bg-[#DE3F3B]" : "bg-[#7C7C7C]"} `}></span>
                <h2 className={`recolreg text-[1rem] ${false ? "text-white" : "text-[#7C7C7C]"}`}>{data}</h2>
              </div>
           ))}
          </div>

          <div className='flex flex-col space-y-[48px]' >
              <div>
                <h2 className='recolreg md:text-[40px] text-white' >Overview</h2>
                <p className='neuereg text-[20px] leading-[28px] text-white '>Dream Planet is a platform for creators (musicians, photographers, etc.) to share their content and engage with fans. The platform includes features like forums for discussions, campaign creation for events, premium subscriptions, and an admin dashboard for analytics.</p>

                <div className='flex items-center space-x-[64px] mt-[24px]'>
                  <div className='flex flex-col space-y-[4px]'>
                    <h3 className='text-white neuebold text-[20px]' >Role</h3>
                    <p className='neuereg text-[20px] text-white'>Backend Developer.</p>
                  </div>

                  <div className='flex flex-col space-y-[4px]'>
                    <h3 className='text-white neuebold text-[20px]' >Status</h3>
                    <p className='neuereg text-[20px] text-white'>Live</p>
                  </div>
                </div>
              </div>


           {
            data.map((data, index) => (
              <div key={index}>
              <h2 className='recolreg md:text-[40px] text-white' >{data.title}</h2>
              <ul className='list-disc list-inside flex flex-col space-y-[24px]'>
                {
                  data.list.map((item, index) => (
                    <li key={index} className='neuereg text-[20px] text-white'>{item}</li>
                  ))
                }
                
              </ul>
              </div>
            ))
           }

          </div>
      </div>



           <div className='bg-[#111821] pb-[42px] '>
              <div className="relative h-full w-full">
                <div className="absolute top-0 left-[-4rem] h-[140px] w-[120vw] bg-black -rotate-[10deg] origin-center whitespace-nowrap overflow-hidden blur-sm">
                <p className='marquee recolreg text-white text-[72px] !mt-4' ref={marqueeRef}>
				FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY GOT A GIG FOR ME? -
				CONTACT ME FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY
				FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY GOT A GIG FOR ME? -
				CONTACT ME FULLSTACK DEVELOPER - EZOMON GLORYFULLSTACK DEVELOPER - EZOMON GLORY
			</p>
                </div>
                <div className="absolute top-0 left-[-4rem] h-[140px] w-[120vw] bg-red-500 rotate-[10deg] origin-center whitespace-nowrap overflow-hidden">
                <p className='marquee2 recolreg text-white text-[72px] !mt-4' ref={marqueeRef2}>
				GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG
				FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? -
				CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME
				GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG
				FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? -
				CONTACT ME GOT A GIG FOR ME? - CONTACT MEGOT A GIG FOR ME? - CONTACT ME
			</p>
                </div>
              </div>
              <div className='w-[90%] mx-auto pt-[20rem]'>
                <Footer color="text-white" />
              </div>
           </div>


    </div>
  )
}

export default index