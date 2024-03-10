import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // State to track whether the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);
  // State to keep track of the previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // useEffect to handle scroll events
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollPos = window.scrollY;
      // Determine if the user is scrolling down and has scrolled past 50 pixels
      const shouldHideNavbar =
        currentScrollPos > prevScrollPos && currentScrollPos > 50;

      // Update the state based on the scroll direction
      setIsScrolled(shouldHideNavbar);
      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // Re-run the effect when prevScrollPos changes

  return (

    <div className={`text-gray-600 font-sGrotesk p-4 flex justify-between items-center h-16 fixed top-0 left-0 w-full transition-transform duration-300 transform ${isScrolled ? "-translate-y-full" : "translate-y-0"}`} style={{ zIndex: 1000, backdropFilter: "blur(10px)" }}>


      {/* Portfolio Symbol */}
      <img className="w-10 ml-12 mt-4" src="/images/bookz.png" alt="reading Book Logo" />


      <div className="flex">

        {/* Link to scroll to the "About" section */}
        <Link to="about" spy={true} smooth={true} offset={-70} duration={550}>
          <h2 className="ml-12 mr-4 hover:text-red-900 font-bold">About</h2>
        </Link>

        {/* Link to scroll to the "Projects" section */}
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={550}>
          <h2 className="ml-12 mr-4 hover:text-red-900 font-bold">Projects</h2>
        </Link>

        {/* Link to scroll to the "Contact" section */}
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={550}>
          <h2 className="ml-12 mr-12 hover:text-red-900 font-bold">Contact</h2>
        </Link>
        
        {/* Link to open the resume PDF in a new tab */}
        <a href="./Irvin_Pelcaztre_Ortega's_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <h2 className="ml-8 mr-12 hover:text-red-900 font-bold">Resume</h2>
        </a>

      </div>



    </div>
  );
};

export default Navbar;
