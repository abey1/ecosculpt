import React from "react";
import Image from "next/image";
import user1 from "./assets/images/user1.png";
import user2 from "./assets/images/user2.jpg";
import user3 from "./assets/images/user3.jpg";
import user4 from "./assets/images/user4.jpg";

const About = () => {
  return (
    <div className="bodymargin sectionseparate">
      <div className="flex flex-col items-center justify-center  font-mo">
        <div className="capitalize font-bold text-[2rem] md:text-[3rem] text-center">
          <span className="text-secondarydark dark:text-white ">
            See What They Are Saying
          </span>{" "}
          <span className="text-primary">About EcoSculpt</span>
        </div>
        <p className="px-[20%] text-center mb-[5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex max-w-[100%]  bg-white rounded-lg overflow-hidden shadow-[4px_4px_6px_rgba(0,0,0,0.1)] max-h-[100%] gap-8  transition-all duration-300 hover:scale-105 cursor-pointer">
          <Image
            src={user1}
            alt="user 1"
            className="object-cover rounded-[50%] h-20 w-20"
          />
          <div className="flex flex-col">
            <p>
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas lobortis nisi at est euismod volutpat. Fusce a iaculis
              leo. Maecenas tempor hendrerit cursus.
            </p>
            <div className="flex">
              <div className="flex flex-col">
                <h2 className="text-secondarydark">Eko Susiloanto</h2>
                <p className="text-[0.6rem] capitalize">
                  Regional Mobility Manager
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};

export default About;
