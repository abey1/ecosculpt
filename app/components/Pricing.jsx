import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const Pricing = () => {
  return (
    <div className="bodymargin sectionseparate">
      {/* title and subtitle */}
      <div className="flex flex-col items-center justify-center  font-mo">
        <div className="capitalize font-bold text-[2rem] md:text-[3rem]">
          <span className="text-secondarydark dark:text-white">pricing</span>{" "}
          <span className="text-primary">table</span>
        </div>
        <p className="px-[20%] text-center mb-[5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 w-[100%]  gap-8">
          <div className="flex flex-col   max-w-[100%]  bg-white rounded-lg overflow-hidden shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-8  transition-all duration-300 hover:scale-105 cursor-pointer">
            {/* card header */}
            <div className="flex px-5 py-7 items-center justify-between bg-primary text-mo">
              <h2 className="text-white capitalize font-bold tracking-wider">
                basic plan
              </h2>
              <button className="rounded-full bg-white text-black dark:text-black px-3 py-2 capitalize">
                package
              </button>
            </div>
            {/* card price */}
            <div className="flex flex-col justify-center items-center gap-4 border-b-2 border-primary pb-8">
              <div className="font-bold text-primary text-5xl">$40.00</div>
              <div className="text-primary">/per month</div>
            </div>
            {/* card services */}
            <div className="flex flex-col items-start justify-center px-8 mb-8">
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Initial Consultation</p>
              </div>
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Labor Costs</p>
              </div>
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Materials and Plants</p>
              </div>
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Equipment and Machinery</p>
              </div>
            </div>
            {/* purchase button */}
            <button className="bg-primary capitalize text-white rounded-full py-4 px-4 mx-8">
              purchase
            </button>
          </div>
          <div className="flex flex-col   max-w-[100%]  bg-white rounded-lg overflow-hidden shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-8  transition-all duration-300 hover:scale-105 cursor-pointer">
            {/* card header */}
            <div className="flex px-5 py-7 items-center justify-between bg-primary text-mo">
              <h2 className="text-white capitalize font-bold tracking-wider">
                Standard Plan
              </h2>
              <button className="rounded-full bg-white text-black dark:text-black px-3 py-2 capitalize">
                package
              </button>
            </div>
            {/* card price */}
            <div className="flex flex-col justify-center items-center gap-4 border-b-2 border-primary pb-8">
              <div className="font-bold text-primary text-5xl">$80.00</div>
              <div className="text-primary">/per month</div>
            </div>
            {/* card services */}
            <div className="flex flex-col items-start justify-center px-8 mb-8">
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Initial Consultation</p>
              </div>
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Labor Costs</p>
              </div>
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Materials and Plants</p>
              </div>
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Equipment and Machinery</p>
              </div>
              <div className="flex items-center gap-4 text-primary border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Permits and Inspection Fees</p>
              </div>
            </div>
            {/* purchase button */}
            <button className="bg-primary capitalize text-white rounded-full py-4 px-4 mx-8">
              purchase
            </button>
          </div>
          <div className="flex flex-col   max-w-[100%]  bg-white rounded-lg overflow-hidden shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%]   transition-all duration-300 hover:scale-105 cursor-pointer">
            {/* card header */}
            <div className="flex px-5 py-7 items-center justify-between bg-white text-mo ">
              <h2 className="text-primary capitalize font-bold tracking-wider">
                Premium Plan
              </h2>
              <button className="rounded-full text-white bg-primary px-3 py-2 capitalize">
                Promo
              </button>
            </div>
            {/* card price */}
            <div className="flex flex-col justify-center items-center gap-4 bg-primary pt-8 border-b-2 border-white pb-8">
              <div className="font-bold text-white text-5xl ">$120.00</div>
              <div className="text-white">/per month</div>
            </div>
            {/* card services */}
            <div className="flex flex-col items-start justify-center px-8 pb-8 bg-primary pt-8">
              <div className="flex items-center gap-4 text-white border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Initial Consultation</p>
              </div>
              <div className="flex items-center gap-4 text-white border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Labor Costs</p>
              </div>
              <div className="flex items-center gap-4 text-white border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Materials and Plants</p>
              </div>
              <div className="flex items-center gap-4 text-white border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Equipment and Machinery</p>
              </div>
              <div className="flex items-center gap-4 text-white border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Permits and Inspection Fees</p>
              </div>
              <div className="flex items-center gap-4 text-white border-b-1 border-primary pb-4 px-8">
                <CiCircleCheck className="" />
                <p>Maintenance Packages</p>
              </div>
            </div>
            {/* purchase button */}
            <div className="flex items-center bg-primary max-w-[100%]">
              <button className="bg-white capitalize w-[100%] text-primary rounded-full py-4 px-4 mx-8">
                purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
