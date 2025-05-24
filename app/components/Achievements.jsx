import React from "react";

const Achievements = ({ achievements }) => {
  console.log(achievements[0].amount);
  return (
    <div
      className={`grid grid-cols-2 gap-y-10 lg:flex z-20  bg-white rounded-lg `}
    >
      {achievements.map((achievement, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col max-h-1/12 max-w-1/4   border-r-2 border-secondarydark`}
          >
            <div className={`flex justify-center items-center  `}>
              <div className="flex mb-2">
                <h2 className="z-20 text-2xl md:text-3xl font-bold font-mo  text-secondarydark  ">
                  {achievement.amount}
                </h2>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  +
                </h2>
              </div>
            </div>

            <h2 className="text-1xl text-secondarydark font-mo capitalize">
              {achievement.type}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;

{
  /*import React from "react";

const Achievements = ({ achievements }) => {
  console.log(achievements[0].amount);
  return (
    <div
      className={`grid grid-cols-2 gap-y-10 lg:flex z-20 p-[32px]  bg-white rounded-lg py-[32px] px-[32px]`}
    >
      {achievements.map((achievement, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col w-[116px] h-[74px]  md:w-[216] md:h-[88px] ${
              index == 0 ? "sm:items-center items-start" : "items-center"
            }  ${index == 3 && " sm:items-center items-end border-none"} ${
              index == 1 && "sm:border-none"
            } border-r-2 border-secondarydark`}
          >
            <div
              className={`flex items-center ${index == 0 ? "pl-10" : ""} ${
                index == 3 && "pr-10"
              }`}
            >
              <h2 className="z-20 text-[25px] md:text-[50px] font-bold font-mo  text-secondarydark">
                {achievement.amount}
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-primary">+</h2>
            </div>

            <h2 className="text-[16px] font-mo capitalize">
              {achievement.type}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
 */
}
