import { FC } from "react";
import { svgs } from "../../constants";

const Hero: FC = () => {
  return (
    <div
      data-testid="hero"
      className="flex flex-col-reverse mt-4 items-center md:flex-row md:justify-between md:mt-36"
    >
      <div className="hero__text">
        <h1 className="text-xl text-center leading-6 text-herotext font-semibold md:text-4xl md:text-left md:leading-10">
          With Alium, standing <span className="text-alium">out</span> <br />{" "}
          becomes a habit.
        </h1>
        <div className="w-full md:w-[28.75rem] mt-4 md:text-left">
          <h4 className="font-semibold text-center text-sm text-hero md:text-2xl md:text-left">
            Build professional and eye catching resumes in just few minutes with
            our industry standard templates.
          </h4>
        </div>
        <div className="mt-4 text-center md:text-left">
          <button className="bg-herobtn rounded-sm text-white px-6 py-4 text-xs md:px-10 md:py-6">
            Build My Resume
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img
          src={svgs.herofirst}
          alt=""
          className="w-64 h-64 md:w-full md:h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
