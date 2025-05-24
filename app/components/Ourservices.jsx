import React from "react";
import garden1 from "./assets/images/garden1.png";
import garden2 from "./assets/images/garden2.png";
import Image from "next/image";
import { ImTarget } from "react-icons/im";
import { TbCircleDashed } from "react-icons/tb";
import { FaSquareCheck } from "react-icons/fa6";

const Ourservices = () => {
  return (
    <div className="bodymargin z-20 sectionseparate">
      {/* our services title */}
      <div className="capitalize font-bold text-[2rem] md:text-[3rem] font-mo md:max-w-1/2">
        <span className="text-secondarydark dark:text-whited">
          caring for your
        </span>
        <span className="text-primary"> private plants</span>
        <span className="text-secondarydark dark:text-whited">
          , our expertise
        </span>
      </div>
      <p className="font-exile md:max-w-1/2 text-grayp dark:text dark:text-grayd">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et
        ex volutpat tincidunt eget at felis.
      </p>
      <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2">
        <div className="flex flex-col gap-y-9  items-start justify-center">
          <div className="max-w-[100%] p-6 bg-white rounded-lg shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-1/2">
            <ImTarget className="text-primary text-1xl sm:text-2xl md:text-3xl mb-2" />
            <span className="text-secondarydark capitalize text-2xl">our</span>{" "}
            <span className="text-primary capitalize">Mission</span>
            <p className="mt-2 text-grayp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis.
            </p>
          </div>
          <div className="max-w-[100%] p-6 bg-white rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.1)] max-h-1/2">
            <TbCircleDashed className="text-primary text-1xl sm:text-2xl md:text-3xl mb-2" />
            <span className="text-secondarydark capitalize text-2xl">our</span>{" "}
            <span className="text-primary capitalize">Vission</span>
            <p className="mt-2 text-grayp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis.
            </p>
          </div>
        </div>
        <div className="flex  items-start md:items-end justify-center">
          <Image
            className="object-cover h-[100%] w-11/12"
            src={garden1}
            alt="garden 1"
          />
        </div>
        <div className="flex  items-center  md:items-start justify-center">
          <Image
            className="object-cover h-[100%] w-11/12"
            src={garden2}
            alt="garden 2"
          />
        </div>
        <div className="flex flex-col gap-7 items-start justify-start">
          <div className="font-bold font-mo text-[2rem] md:text-[3rem]">
            <span className="capitalize text-secondarydark dark:text-whited">
              they
            </span>{" "}
            <span className="capitalize  text-primary">choose us</span>
          </div>
          <p className="text-grayp dark:text-grayd">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis nunc eget congue ante.
            Vivamus ut sapien .
          </p>
          <div className="flex flex-col gap-7">
            <div className="flex gap-3 text-2xl md:text-3xl items-center text-primary">
              <FaSquareCheck className="" />{" "}
              <h2 className="capitalize text-secondarydark dark:text-grayd  font-mo font-bold">
                expertise
              </h2>
            </div>
            <div className="flex gap-3 text-2xl md:text-3xl items-center text-primary">
              <FaSquareCheck className="" />{" "}
              <h2 className="capitalize text-secondarydark dark:text-grayd  dark:text-grayd   font-mo font-bold">
                Timeliness
              </h2>
            </div>
            <div className="flex gap-3 text-2xl md:text-3xl items-center text-primary">
              <FaSquareCheck className="" />{" "}
              <h2 className="capitalize text-secondarydark dark:text-grayd   font-mo font-bold">
                Customization
              </h2>
            </div>
            <div className="flex gap-3 text-2xl md:text-3xl items-center text-primary">
              <FaSquareCheck className="" />{" "}
              <h2 className="capitalize text-secondarydark dark:text-grayd   font-mo font-bold">
                Quality Workmanship
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
