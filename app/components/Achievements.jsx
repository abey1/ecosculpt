import React from "react";

const Achievements = ({ achievements }) => {
  console.log(achievements[0].amount);
  return (
    <div className="z-20 p-[32px]">
      {achievements.map((achievement, index) => {
        return (
          <h2 key={index} className="z-20 text-white">
            {achievement.amount}
          </h2>
        );
      })}
      <h1 className="text-white">abebe</h1>
    </div>
  );
};

export default Achievements;
