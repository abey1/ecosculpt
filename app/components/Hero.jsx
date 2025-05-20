import React from "react";
import Image from "next/image";
import herobg from "../../public/images/hero_background_image.png";
import styles from "./hero.css";

const Hero = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="z-0 bg-gradient-to-t from-black-900 to-transparent opacity-80"
        fill
        src={herobg}
        alt="hero background image"
      />
      <h1 className="z-10 bg-primary text-9xl">{title}</h1>
      <h2 className="z-10">{subtitle}</h2>
    </div>
  );
};

export default Hero;
