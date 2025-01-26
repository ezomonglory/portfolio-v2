"use client";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import ImageScroll from "../../components/ImageScroll";
import { mainArr, returnArr } from "../../svg";
import Link from "next/link";
import { WorksData } from "../../data";
import { usePathname } from "next/navigation";
import Header from "../../components/Header";

const Page = () => {
  const marqueeRef = useRef();
  const marqueeRef2 = useRef();
  const stickyRef = useRef();
  const stickyRef2 = useRef();
  const stickyContainerRef = useRef();
  const sectionsRef = useRef([]); // Array of refs for sections

  const [activeSection, setActiveSection] = useState(0);
  const [dataToDisplay, setDataToDisplay] = useState(WorksData[0]);
  const [nextPage, setNextPage] = useState(false);
  const [show404, setShow404] = useState(false); // +1 for the overview section

  const addText = () => {
    marqueeRef?.current?.insertAdjacentHTML(
      "beforeend",
      "FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORYFULLSTACK DEVELOPER - EZOMON GLORY"
    );

    marqueeRef2?.current?.insertAdjacentHTML(
      "afterbegin",
      "GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT MEGOT A GIG FOR ME? - CONTACT ME"
    );
  };

  useEffect(() => {
    setInterval(() => {
      addText();
    }, 3000);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (!nextPage) {
              setActiveSection(index);
            } // Update active section
          }
        });
      },
      { root: null, threshold: 0.7 } // Lower threshold for better triggering
    );

    // Observe valid sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pathname = window.location.pathname;
    const permitedPages = WorksData.map((item) => item.page);
    const currentPage = pathname.split("/")[1];
    if (!permitedPages.includes(currentPage)) {
      setShow404(true);
    }
    const data = WorksData.find((item) => item.page === currentPage);
    setDataToDisplay(data);
  }, []);

  const useStickyClassToggle = (ref, offset = 12, className = "absolute") => {
    useEffect(() => {
      const handleScroll = () => {
        setNextPage(false);
        if (!stickyContainerRef.current) return;

        const rect = stickyContainerRef.current.getBoundingClientRect();
        const isWithinOffset = rect.top <= offset;

        if (isWithinOffset) {
          stickyRef.current.classList.add("md:fixed");
          stickyRef.current.classList.add("md:top-[100px]");
          stickyRef.current.classList.add("md:left-[120px]");
          stickyRef2.current.classList.add("md:ml-[40%]");
        } else {
          stickyRef.current.classList.remove("md:fixed");
          stickyRef.current.classList.remove("md:top-0");
          stickyRef2.current.classList.remove("md:ml-[40%]");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [ref, offset, className]);
  };

  useStickyClassToggle(stickyRef, 12, "absolute");

  const data = [
    {
      title: "Responsibilities",
      list: [
        "Designed and developed RESTful APIs for core platform functionalities, including user registration, content upload, and forum management using Node.js, TypeScript, and Express.js.",
        "Integrated Stripe for secure payment processing, enabling premium subscriptions and campaign contributions.",
        "Implemented real-time features using Redis for notifications, chat systems, and post interactions (likes, comments, and shares).",
        "Developed advanced forum functionalities, including user-generated threads, image uploads, post favorites, and blocking features.",
        "Built and optimized the admin dashboard to provide analytics on user activity, including most-liked posts and engagement metrics.",
        "Ensured seamless CI/CD pipelines with GitHub Actions and deployed scalable services to Azure.",
        "Collaborated with a cross-functional team to design database schemas for efficient content storage and retrieval.",
      ],
    },
    {
      title: "Key Acheivements",
      list: [
        "Improved API response times by 40% through query optimization and caching strategies.",
        "Streamlined deployment processes, reducing downtime to under 1%.",
      ],
    },
    {
      title: "Technologies",
      list: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "SQL",
        "PostgreSQL",
        "Redis",
        "Stripe",
        "Azure",
        "GitHub Actions",
      ],
    },
  ];

  return show404 ? (
    <div>404 page</div>
  ) : (
    <div className="overflow-x-hidden scroll-smooth">
      <div className="md:w-[90%] mx-auto">
        {/* Header */}
        <div className="h-[48px] hidden md:flex mt-[52px] flex fle-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-[12px]">
            <Link
              href="/#works"
              className="h-[48px] py-[10px] bg-[#DE3F3B] rounded-full px-[16px] flex items-center space-x-[8px]"
            >
              <span>{returnArr}</span>
              <h2 className="neuemd text-[18px] text-white">Return</h2>
            </Link>
            <Link
              onClick={() => {
                const data = WorksData.find(
                  (item) => item.page === dataToDisplay?.next.split("/")[1]
                );
                setDataToDisplay(data);
              }}
              href={dataToDisplay?.next || ""}
              className="h-[48px] py-[10px] bg-[#DE3F3B] rounded-full px-[24px]"
            >
              <h2 className="neuemd text-[18px] text-white">Next project</h2>
            </Link>
          </div>
          <h2 className="neuemd text-[#202020] underline">LETS TALK!</h2>
        </div>

        <div className="md:hidden">
          <Header prev={true} next={()=>{
            const data = WorksData.find(
              (item) => item.page === dataToDisplay?.next.split("/")[1]
            );
            setDataToDisplay(data);
          }} />
        </div>

        {/* Project Info */}
        <div className="md:mt-[105px] flex flex-col md:flex-row items-start gap-[32px] md:items-center justify-between px-[20px] md:px-0">
          <div className="w-full">
            <h2 className="recolreg text-[40px] tracking-[-1px] leading-[36px] mt-[48px] md:mt-0 md:tracking-[-1.4px] text-[#111821] md:text-[80px] capitalize">
              {dataToDisplay?.name}
            </h2>
            <div className="flex items-center gap-[8px] w-full flex-wrap mt-[16px] md:mt-0">
              {dataToDisplay?.language?.map((data) => (
                <div
                  className="min-w-[146px] w-fit h-[48px] border border-[#C0C0C0] flex items-center justify-center rounded-full border-[1.2px]"
                  key={data}
                >
                  <h2 className="neuereg md:text-[20px] text-[#111821]">
                    {data}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {dataToDisplay.link && (
            <Link
              href={dataToDisplay.link}
              target="_blank"
              className=" w-[140px] h-[140px] md:w-[160px] md:h-[160px] shrink-0 flex items-center justify-center hover:border hover:border-[#DE3F3B] hover:bg-transparent rounded-full bg-[#DE3F3B] group cursor-pointer"
            >
              <span className="neuemd text-white md:text-[16px] text-center group-hover:hidden">
                {dataToDisplay.type === "app" ? (
                  <>
                    Download <br /> App!
                  </>
                ) : (
                  <>
                    Visit <br /> Website
                  </>
                )}
              </span>
              <span className=" group-hover:block hidden ">{mainArr}</span>
            </Link>
          )}
        </div>
      </div>

      {/* Sticky Section */}
      <div
        ref={stickyContainerRef}
        className="bg-[#111821] scroll-smooth flex w-full rounded-t-[24px] mt-[48px] md:mt-[104px] px-[20px] py-[80px] md:px-[120px] md:py-[140px] h-auto"
      >
        <div
          ref={stickyRef}
          className=" flex-col space-y-[14px] md:w-[40%] shrink-0 hidden md:flex"
        >
          {dataToDisplay?.headers?.map((data, index) => (
            <div
              onClick={() => {
                const section = document.getElementById(data);
                if (section) {
                  setNextPage(true);
                  setActiveSection(index);
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="flex items-center space-x-[8px] cursor-pointer"
              key={index}
            >
              <span
                className={`h-[6px] w-[6px] rounded-full ${
                  activeSection === index ? "bg-[#DE3F3B]" : "bg-[#7C7C7C]"
                }`}
              >
                {" "}
              </span>
              <h2
                className={`recolreg text-[1rem] ${
                  activeSection === index ? "text-white" : "text-[#7C7C7C]"
                }`}
              >
                {data}
              </h2>
            </div>
          ))}
        </div>

        <div ref={stickyRef2} className="flex flex-col space-y-[48px] ">
          <div ref={(el) => (sectionsRef.current[0] = el)} id="Overview">
            <h2 className="recolreg text-[24px] md:text-[40px] text-white">Overview</h2>
            <p className="neuereg md:text-[20px] leading-[28px] text-white">
              {dataToDisplay?.overview}
            </p>

            <div className="flex items-center space-x-[64px] mt-[24px]">
              <div className="flex flex-col space-y-[4px]">
                <h3 className="text-white neuebold text-[20px]">Role</h3>
                <p className="neuereg text-[20px] text-white">
                  {dataToDisplay?.role}
                </p>
              </div>

              <div className="flex flex-col space-y-[4px]">
                <h3 className="text-white neuebold text-[20px]">Status</h3>
                <p className="neuereg text-[20px] text-white">Live</p>
              </div>
            </div>
          </div>

          {dataToDisplay &&
            dataToDisplay?.data?.map((section, index) => (
              <div
                key={index}
                id={section.title}
                ref={(el) => (sectionsRef.current[index + 1] = el)} // Track sections
              >
                <h2 className="recolreg  mb-[16px] md:mb-0 text-[24px] md:text-[40px] text-white">
                  {section.title}
                </h2>
                <ul className="list-disc list-inside flex flex-col space-y-[24px]">
                  {section.list.map((item, index) => (
                    <li key={index} className="neuereg md:text-[20px] text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className="relative z-[20] bg-[#111821]">
        <ImageScroll />
      </div>

      {/* Footer */}
      <div className="bg-[#111821] pt-[20vh] md:pb-[42px] md:pt-[40vh] relative z-[20] ">
        <div className="relative h-full w-full">
          <div className="absolute top-0 left-[-4rem] h-[56px] md:h-[140px] w-[120vw] bg-black -rotate-[10deg] origin-center whitespace-nowrap overflow-hidden blur-sm">
            <p
              className="marquee recolreg text-white text-[24px] md:text-[72px] !mt-2 md:!mt-4"
              ref={marqueeRef}
            >
              FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON
              GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER -
              EZOMON GLORY GOT A GIG FOR ME? - CONTACT ME FULLSTACK DEVELOPER -
              EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK
              DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON GLORY
              FULLSTACK DEVELOPER - EZOMON GLORY FULLSTACK DEVELOPER - EZOMON
              GLORY GOT A GIG FOR ME? - CONTACT ME FULLSTACK DEVELOPER - EZOMON
              GLORYFULLSTACK DEVELOPER - EZOMON GLORY
            </p>
          </div>
          <div className="absolute top-0 left-[-4rem] h-[56px] md:h-[140px] w-[120vw] bg-red-500 rotate-[10deg] origin-center whitespace-nowrap overflow-hidden">
            <p
              className="marquee2 recolreg text-white text-[24px] md:text-[72px] !mt-2 md:!mt-4"
              ref={marqueeRef2}
            >
              GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT
              A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A
              GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG
              FOR ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR
              ME? - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME?
              - CONTACT ME GOT A GIG FOR ME? - CONTACT ME GOT A GIG FOR ME? -
              CONTACT MEGOT A GIG FOR ME? - CONTACT ME
            </p>
          </div>
        </div>
        <div className="w-[90%] mx-auto pt-[10rem] md:pt-[20rem]">
          <Footer color="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Page;
