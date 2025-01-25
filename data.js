import next from "next";
import { headers } from "next/dist/client/components/headers";
import { list } from "postcss";

export const works = [
  {
    number: "01",
    name: "Heyfood",
    href: "/heyfood",
 
  },
  {
    number: "02",
    name: "Serveet",
    href: "/serveet",
    type: "web",
  
    link: "https://serveet.com/",
  },
  {
    number: "03",
    name: "DreamPlanet",
    href: "/dreamplanet",
    
    type: "app",
    link: "https://csc21-22.vercel.app/",
  },
  {
    number: "04",
    name: "David Otu",
    href: "/david",
    type: "web",
    next: "/di",
    link: "https://www.davidotu.xyz/",
  },

  {
    number: "05",
    name: "Digital Yearbook",
    href: "/digital-yearbook",
    type: "web",
    next: "/canva",
    link: "https://csc21-22.vercel.app",
  },

  {
    number: "06",
    name: "Canva & Pixels",
    href: "/canva",
    type: "web",
    link: "https://canva-ezomonglorys-projects.vercel.app/",
  },
];

export const WorksData = [
  {
    name: "HeyFood",
    page:"heyfood",
    next: "/serveet",
    language: ["Typescript", "React.js", "SQL"],
    overview:
      "HeyFood is a food delivery application based in Ibadan, connecting users with local restaurants for meal delivery. The platform also supports e-commerce functionality through the newly added 'Shops' feature, allowing users to purchase retail items and household products.",
    headers: [
      "Overview",
      "Responsibilities",
      "Key Achievements",
      "Technologies",
    ],
    role: "Team Lead & Fullstack Developer",
    data: [
       
      {

        title: "Responsibilities",
        list: [
          "Transitioned the company’s DNS and applications from AWS to Azure, reducing cloud costs and improving integration with existing services",
          "Designed and implemented the 'Shops' feature, transforming the platform into a hybrid food delivery and e-commerce application.",
          "Built RESTful APIs and enhanced the frontend to support retail item browsing, cart functionality, and checkout workflows.",
          "Maintained and optimized the admin dashboard to support analytics and operational needs, ensuring smooth day-to-day processes.",
          "BMonitored and resolved critical production issues to maintain high uptime and user satisfaction.",
        ],
      },
      {
        title: "Key Achievements",
        list: [
          "Implemented a new 'Shops' feature, doubling the platform's revenue within 3 months.",
          "Reduced cloud costs by 30% through migration to Azure.",
          "Achieved a 99.9% uptime, ensuring a seamless user experience.",
        ],
      },
      {
        title: "Technologies",
        list: [
          "TypeScript",
          "Express.js",
          "PostgreSQL",
          "SQL",
          "React.js",
          "Material UI",
          "Azure",
          "Redis",
          "Paystack",
        ],
      },
    ],
  },
  {
    name: "Serveet",
    page:"serveet",
    next: "/dreamplanet",
    language: ["Typescript", "SQL", "Next.js"],
    overview:
      "Serveet, a subsidiary of HeyFood, is a comprehensive platform for business owners to manage their operations effectively. It offers tools for inventory tracking, daily analytics, order management, and integration with point-of-sale systems. The platform also includes a consumer web app for online shopping and payment.",
    headers: ["Overview", "Contributions", "Key Achievements",  "Technologies"],
    role: "Team Lead & Fullstack Developer",
    data: [
      {
        title: "Contributions",
        list: [
          "Collaborated with my team to design and developed the dashboard, enabling features such as inventory management, sales tracking, and product analytics.",
          "Overseeing the completion of the dashboard by mentoring and delegating tasks to the team, ensuring feature consistency and quality.",
          "Implemented automated email functionality for order updates, inventory notifications, and promotional campaigns, enhancing user communication.",
          "Collaborated with my team to build a web application for end-users to browse and purchase products, make payments via Paystack, and utilize gift card features.",
          "Developed the platform’s landing page to create a strong first impression and enhance user engagement.",
          "Engineered a hierarchical category system with support for an infinite number of child categories, ensuring seamless navigation and management of inventory.",
          "Designed and implemented a centralized item library for businesses, allowing shared and reusable product records across multiple locations.",
          "created APIs to connect the platform with point-of-sale systems and kitchen display systems, enabling real-time order updates and processing.",
          "Unified offline and online order management into a single system, allowing business owners to track and process all orders in one place.",
          "Guided and mentored the development team, ensuring timely delivery and alignment with project objectives.",
          "Facilitated task delegation and code reviews to maintain high-quality standards across all features.",
        ],
      },
      {
        title: "Key Achievements",
        list: [
          "Implemented a new 'Shops' feature, doubling the platform's revenue within 3 months.",
          "Reduced cloud costs by 30% through migration to Azure.",
          "Achieved a 99.9% uptime, ensuring a seamless user experience.",
        ],
      },
      {
        title: "Technologies",
        list: [
          "TypeScript",
          "Express.js",
          "PostgreSQL",
          "SQL",
          "Next.Js",
          "Tailwind CSS",
          "Azure",
          "Redis",
          "Paystack",
        ],
      },
    ],
  },
  {
    name: "Dream Planet",
    page:"dreamplanet",
    next: "/david",
    language: ["Typescript", "SQL"],
    overview:
      "Dream Planet is a platform for creators (musicians, photographers, etc.) to share their content and engage with fans. The platform includes features like forums for discussions, campaign creation for events, premium subscriptions, and an admin dashboard for analytics.",
    headers: ["Overview", "Contributions", "Key Achievements", "Technologies"],
    role: "Backend Developer",
    data: [
      {
        title: "Contributions",
        list: [
          "Designed and developed RESTful APIs for core platform functionalities, including user registration, content upload, and forum management using Node.js, TypeScript, and Express.js.",
          "Integrated Stripe for secure payment processing, enabling premium subscriptions and campaign contributions.",
          "Implemented real-time features using Redis for notifications, chat systems, and post interactions (likes, comments, and shares).",
          "Developed advanced forum",
          "Developed advanced forum functionalities, including user-generated threads, image uploads, post favorites, and blocking features.",
          "Built and optimized the admin dashboard to provide analytics on user activity, including most-liked posts and engagement metrics.",
          "Ensured seamless CI/CD pipelines with GitHub Actions and deployed scalable services to Azure.",
        ],
      },
      {
        title: "Key Achievements",
        list: [
          "Improved API response times by 40% through query optimization and caching strategies.",
          "Enhanced system scalability to handle a 30% increase in active users during peak traffic periods.",
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
    ],
  },
  {
    name: "Digital Yearbook",
    page:"digital-yearbook",
    next: "/canva",
    language: ["Nextjs"],
    role:"Frontend Developer",
    overview:
      "Collaborated with a team of peers to create an innovative online yearbook to replace traditional paper-based yearbooks. The platform serves as a digital archive of memories, capturing photos, stories, and key moments from school life, fostering a sense of nostalgia and connection for students and alumni.",
    headers: ["Overview", "Contributions", "Key Features", "Technologies"],
    data: [
      {
        title: "Contributions",
        list: [
          "Developed a responsive and user-friendly interface using Next.js, ensuring a seamless experience across devices.",
          "Website Development: Led the design and development of the entire online yearbook platform, ensuring a seamless and visually appealing user experience.",
          "File Management: Implemented Git Large File Storage (LFS) to efficiently handle and store large multimedia files on GitHub.",
          "Ensured cross-browser compatibility and optimized performance for a smooth user experience.",
        ],
      },
      {
        title: "Key Features",
        list: [
          "Interactive Digital Yearbook: Designed a user-friendly interface for navigating memories and moments.",
          "Memory Gallery: Integrated a dynamic gallery showcasing images and highlights, categorized by events, emotions, and themes.",
          "Efficient Media Handling: Leveraged Git Large File Storage (GLS) to support uploading and managing large files, such as high-resolution images and videos.",
        ],
      },
      {
        title: "Technologies",
        list: [
          "Next.js",
          "Tailwind CSS",
        ],
      }
    ],
  },
  {
    name: "David Otu",
    page:"david",
    next: "/digital-yearbook",
    language: ["Nextjs"],
    role:"Frontend Developer",
    overview:"Developed a personalized portfolio website for a product designer, showcasing their design projects, case studies, and skills. The website highlights their professional achievements and creative expertise, serving as an elegant and functional representation of their design capabilities.",
    headers: ["Overview", "Contributions","Technologies"],
    data:[
        {
            title:"Contributions",
            list:[
                "Project Showcase: Designed sections for case studies and portfolio pieces, emphasizing the designers skills and accomplishments.",
                "Responsive Design: Ensured compatibility across devices using Tailwind CSS for seamless user experience on desktops, tablets, and smartphones.",
                "Optimized Performance: Leveraged Next.js for server-side rendering and optimized builds to ensure fast loading times.",

            ]
        },
        {
            title:"Technologies",
            list:[
                "Next.js",
                "Tailwind CSS",
            ]
        }
    ]
  },
  {
    name: "Canvas & Pixels",
    page:"canva",
    language: ["Nextjs"],
    role:"Frontend Developer",
    overview:"Designed and developed a landing page for Canvas and Pixels, a software studio offering end-to-end services, including conceptualization, design, development, testing, deployment, and maintenance of software solutions. The website serves as a professional and visually engaging introduction to the studio's services and values.",
    headers: ["Overview", "Contributions","Technologies"],
    data:[
        {
            title:"Contributions",
            list:[
                "Crafted a sleek and professional landing page to captivate visitors and reflect the studio's innovative approach.",
                "Ensured seamless viewing across devices, from desktops to smartphones, using Tailwind CSS.",
                "Leveraged Vite for fast builds and efficient development, ensuring a smooth and responsive user experience.",
                "Implemented nice animations to give a good user experience.",

            ]
        },
        {
            title:"Technologies",
            list:[
                "Next.js",
                "Tailwind CSS",
            ]
        }
    ]
  }
];
