import React from "react";
import Image from "next/image";
import garden31 from "./assets/images/garden31.png";
import garden321 from "./assets/images/garden321.png";
import garden322 from "./assets/images/garden322.png";
import garden323 from "./assets/images/garden323.png";
import garden33 from "./assets/images/garden33.png";
const Gallery = () => {
  return (
    <div className="bodymargin sectionseparate">
      <div className="flex flex-col items-center justify-center  font-mo">
        <div className="capitalize font-bold text-[2rem] md:text-[3rem]">
          <span className="text-secondarydark dark:text-white">our</span>{" "}
          <span className="text-primary">gallery</span>
        </div>
        <p className="px-[20%] text-center mb-[5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Image
          className="object-cover w-[100%] rounded-xl overflow-hidden h-[100%]"
          src={garden31}
          alt="garden 31"
        />
        <div className="grid grid-cols-2 gap-8">
          <Image
            src={garden321}
            alt="garden 321"
            className="object-cover w-[100%] rounded-xl overflow-hidden"
          />
          <Image
            src={garden322}
            alt="garden 322"
            className="object-cover w-[100%] rounded-xl overflow-hidden"
          />
          <div className="col-span-2">
            <Image
              src={garden323}
              alt="garden 322"
              className="object-cover w-[100%] "
            />
          </div>
        </div>
        <Image
          src={garden33}
          alt="garden 33"
          className="object-cover w-[100%] rounded-xl overflow-hidden h-[100%]"
        />
      </div>
    </div>
  );
};

export default Gallery;
