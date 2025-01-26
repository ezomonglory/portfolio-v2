import React, { useEffect, useRef } from 'react'

const ImageScroll = () => {


  const scrollContainerRef = useRef();

  useEffect(() => {
    // const handleScroll = (event) => {
    //     if (!scrollContainerRef.current) return;
  
    //     // Check if the scroll event originated within the scrollable container
    //     const container = scrollContainerRef.current;
  
    //     // Calculate boundaries
    //     const isScrollable =
    //       container.scrollWidth > container.clientWidth;
  
    //     if (isScrollable) {
    //       // Allow horizontal scrolling inside the container
    //       container.scrollLeft += event.deltaY;
  
    //       // Prevent default behavior to stop vertical page scrolling
    //       event.preventDefault();
    //     }else{
    //         // Prevent default behavior to stop vertical page scrolling
    //         event.preventDefault();
    //     }
    //   };
     
    // // Attach event listener to the scroll event
    // window.addEventListener("wheel", handleScroll);

     // Add event listener to handle scrolling
    
     const handleScroll = (event) => {
        if (!scrollContainerRef.current) return;
      
        const container = scrollContainerRef.current;
      
        // Check if the container is scrollable
        const isScrollable = container.scrollWidth > container.clientWidth;
      
        if (isScrollable) {
          // Check boundaries
          const atStart = container.scrollLeft === 0 && event.deltaY < 0;
          const atEnd =
            container.scrollLeft + container.clientWidth >= container.scrollWidth &&
            event.deltaY > 0;
      
          if (!atStart && !atEnd) {
            // Redirect vertical scroll to horizontal scroll
            container.scrollLeft += event.deltaY;
      
            // Prevent default only when within scrollable bounds
            event.preventDefault();
          }
        }
      };
      
    
     const container = scrollContainerRef.current;
     if (container) {
       container.addEventListener("wheel", handleScroll, { passive: false });
     }
 
     return () => {
       if (container) {
         container.removeEventListener("wheel", handleScroll);
       }
     };


    // Cleanup
    // return () => window.removeEventListener("wheel", handleScroll);
  }, []);



  return (
    
     <div  ref={scrollContainerRef} className="flex space-x-6 md:space-x-12 w-full overflow-x-scroll scroll-hidden ">
     { [1,2,3,4,5,6,7,8,9,0,1,2,3].map((data, i) => (
        <div key={i} className="w-[95%] h-[190px]  md:h-[500px] md:w-[500px] shrink-0  bg-red-500" >
         
        </div>
      ))}
     </div>

  )
}

export default ImageScroll