"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="text-2xl sticky top-0 z-10  py-[1%] border-b-2 border-b-white px-[1rem]  sm:px-[3rem] md:px-[4rem] lg:px-[5rem]">
        {/* logo */}
        <div
          className={` font-bold text-[1rem] sm:text-[1.5rem] md:text-[2rem] font-mo ${
            isScrolled ? "text-secondarydark" : "text-white"
          }`}
        >
          EcoSculpt
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
