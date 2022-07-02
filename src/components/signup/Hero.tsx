import React, { FC } from "react";
import HeroFirst from "../../assets/herofirst.svg";

const Hero: FC = () => {
  return (
    <div className="flex mt-36 items-center">
      <div className="hero__text">
        <h1 className="text-4xl leading-10 text-herotext font-semibold">
          With Alium, standing <span className="text-alium">out</span> <br />{" "}
          becomes a habit.
        </h1>
        <div className="w-[460px] mt-4">
          <h4 className="font-semibold text-2xl text-hero">
            Build professional and eye catching resumes in just few minutes with
            our industry standard templates.
          </h4>
        </div>
        <div className="mt-4">
          <button className="bg-herobtn rounded-sm text-white px-10 py-6">
            Build My Resume
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img src={HeroFirst} alt="" />
      </div>
    </div>
  );
};

export default Hero;
