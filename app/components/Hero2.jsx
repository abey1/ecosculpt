import React from "react";
import Achievements from "./Achievements";

const Hero2 = () => {
  const achievements = [
    { amount: "15", type: "years experience" },
    { amount: "10k", type: "product" },
    { amount: "5k", type: "satisfied clients" },
    { amount: "87", type: "local team members" },
  ];
  return (
    <section className=" mainbg relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white">
      {/* <div className="absolute inset-0  bg-opacity-100"></div> */}
      <div className=" bodymargin relative z-10 text-center ">
        <h1 className="text-4xl md:text-6xl font-bold mb-10">
          Gardens of Distinction
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl">
          Transform your outdoor space into a sanctuary of beauty and
          tranquility. Our expert designs bring nature's elegance right to your
          doorstep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-200 text-green-700 px-6 py-3 rounded-md transition duration-300">
            Learn More
          </button>
        </div>
        {/* <Achievements achievements={achievements} /> */}
      </div>
    </section>
  );
};

export default Hero2;
