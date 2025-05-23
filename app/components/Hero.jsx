import React from "react";
import Image from "next/image";
import herobg from "../../public/images/hero_background_image.png";
import herobg2 from "../../public/images/hero_background_image2.png";
import Achievements from "./Achievements";

const Hero = ({ title, subtitle }) => {
  const achievements = [
    { amount: "15", type: "years experience" },
    { amount: "10k", type: "product" },
    { amount: "5k", type: "satisfied clients" },
    { amount: "87", type: "local team members" },
  ];
  return (
    <div
      className={`flex flex-col bg-(image:${herobg}) items-center justify-center w-screen border-8 gap-[50px] md:gap-[60px] lg:gap-[80px]  h-[140%] sm:h-[160%] md:h-[160%] lg:h-[160%]`}
    >
      {/* background image */}
      <Image
        src={herobg2}
        className="z-0 absolute top-0 bg-linear-to-t from-sky-500 to-indigo-500 w-full h-[140%] sm:h-[160%] md:h-[160%] lg:h-[160%]"
        alt="hero background image"
      />
      {/* hero title and subtitle */}
      <div className="flex flex-col items-center justify-center gap-[50px] md:gap-[60px] lg:gap-[80px] z-20 mt-[80rem] sm:mt-[65rem] md:mt-[75rem]">
        <h1 className="font-mo text-white font-bold  text-5xl md:text-6xl lg:text-7xl xl:text-8xl  ml-[10%] mr-[10%]  text-center">
          {title}
        </h1>
        <h2 className=" text-xs lg:text-base md:text-sm  font-mo text-white text-black text-center ml-[20%] mr-[20%] ">
          {subtitle}
        </h2>
      </div>
      {/* hero buttons */}
      <div className="flex gap-7  z-20">
        <div className="border-0 rounded-full bg-primary cursor-pointer hover:bg-darkprimary">
          <h2 className="capitalize px-[10px] py-[12px] md:px-[20px] md:py-[22px] lg:px-[40px] lg:py-[32px] font-mo font-bold text-white text-[10px] md:text-[14px] lg:text-[21px]">
            get started
          </h2>
        </div>
        <div className="border-1 border-primary rounded-full bg-white text-primary hover:text-darkprimary cursor-pointer">
          <h2 className="capitalize px-[10px] py-[12px] md:px-[20px] md:py-[22px] lg:px-[40px] lg:py-[32px] font-mo font-bold  text-[10px] md:text-[14px] lg:text-[21px]">
            learn more
          </h2>
        </div>
      </div>
      {/* hero achievements */}
      <Achievements achievements={achievements} />
    </div>
  );
};

export default Hero;
