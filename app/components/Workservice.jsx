import React from "react";
import { TbGardenCartFilled } from "react-icons/tb";
import { GiFlowerPot } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { PiShovelFill } from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";
import { PiFlowerTulipBold } from "react-icons/pi";

const Workservice = () => {
  return (
    <div className="bodymargin  sectionseparate">
      {/* title */}
      <div className="capitalize font-bold text-[2rem] md:text-[3rem] font-mo md:max-w-1/2">
        <span className="text-secondarydark dark:text-whited capitalize">
          Our landscaping work and
        </span>{" "}
        <span className="text-primary capitalize">services</span>
      </div>
      <p className="font-exile md:max-w-1/2 text-grayp dark:text-grayd">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et
        ex volutpat tincidunt eget at felis.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div
          className={`flex flex-col max-w-[100%] p-6  bg-white rounded-lg shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-2  transition-all duration-300 hover:scale-105 cursor-pointer hover:${() =>
            "bg-primary"}`}
        >
          <TbGardenCartFilled className="text-primary  text-1xl sm:text-2xl md:text-3xl mb-2" />

          <div className="text-2xl font-mo capitalize font-bold">
            <span className="text-secondarydark">lawn</span>{" "}
            <span className="text-primary ">care</span>
          </div>
          <p className="text-grayp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante.{" "}
          </p>
        </div>
        <div
          className={`flex flex-col max-w-[100%] p-6  bg-white rounded-lg shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-2  transition-all duration-300 hover:scale-105 cursor-pointer hover:${() =>
            "bg-primary"}`}
        >
          <GiFlowerPot className="text-primary text-1xl sm:text-2xl md:text-3xl mb-2" />
          <div className="text-2xl font-mo capitalize font-bold">
            <span className="text-secondarydark">Tree and</span>{" "}
            <span className="text-primary ">Shrub Care</span>
          </div>
          <p className="text-grayp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante.{" "}
          </p>
        </div>
        <div
          className={`flex flex-col max-w-[100%] p-6  bg-white rounded-lg shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-2  transition-all duration-300 hover:scale-105 cursor-pointer hover:${() =>
            "bg-primary"}`}
        >
          <FaUserGraduate className="text-primary text-1xl sm:text-2xl md:text-3xl mb-2" />
          <div className="text-2xl font-mo capitalize font-bold">
            <span className="text-secondarydark">Free</span>{" "}
            <span className="text-primary ">Consultations</span>
          </div>
          <p className="text-grayp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante.{" "}
          </p>
        </div>
        <div
          className={`flex flex-col max-w-[100%] p-6  bg-white rounded-lg shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-2  transition-all duration-300 hover:scale-105 cursor-pointer hover:${() =>
            "bg-primary"}`}
        >
          <PiShovelFill className="text-primary text-1xl sm:text-2xl md:text-3xl mb-2" />
          <div className="text-2xl font-mo capitalize font-bold">
            <span className="text-secondarydark">Garden</span>{" "}
            <span className="text-primary ">Design</span>
          </div>
          <p className="text-grayp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante.{" "}
          </p>
        </div>
        <div
          className={`flex flex-col max-w-[100%] p-6  bg-white rounded-lg shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-2  transition-all duration-300 hover:scale-105 cursor-pointer hover:${() =>
            "bg-primary"}`}
        >
          <GiVacuumCleaner className="text-primary text-1xl sm:text-2xl md:text-3xl mb-2" />
          <div className="text-2xl font-mo capitalize font-bold">
            <span className="text-secondarydark">water</span>{" "}
            <span className="text-primary ">features</span>
          </div>
          <p className="text-grayp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante.{" "}
          </p>
        </div>
        <div
          className={`flex flex-col max-w-[100%] p-6  bg-white rounded-lg shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-2  transition-all duration-300 hover:scale-105 cursor-pointer hover:${() =>
            "bg-primary"}`}
        >
          <PiFlowerTulipBold className="text-primary text-1xl sm:text-2xl md:text-3xl mb-2" />
          <div className="text-2xl font-mo capitalize font-bold">
            <span className="text-secondarydark">water</span>{" "}
            <span className="text-primary ">features</span>
          </div>
          <p className="text-grayp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workservice;
