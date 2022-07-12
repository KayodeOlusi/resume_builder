import { FC } from "react";
import { svgs } from "../../constants";

const Explore: FC = () => {
  return (
    <div className="mt-4 flex flex-col-reverse items-center md:flex-row md:mt-36 md:justify-between">
      <div className="hero__text px-4 md:w-[35.938rem] md:px-0">
        <h1 className="text-xl text-center leading-6 text-herotext font-semibold md:text-4xl md:text-left md:leading-10">
          <span className="text-alium">Alium</span> gives you the perfect resume
          for your desired job.
        </h1>
        <div className="w-full md:w-[28.75rem] mt-4 md:text-left">
          <h4 className="font-semibold text-center text-sm text-hero md:text-2xl md:text-left">
            It takes only a few seconds for recruiters to decide if you are the
            right pick for their vacancy. You need to make them curious enough
            to make them invite you for the interview. That is where we come in
            our templates are proven to be the best world wide for landing jobs!
          </h4>
        </div>
        <div className="mt-4 text-center md:text-left">
          <button className="bg-herobtn rounded-sm text-white px-6 py-4 text-xs md:px-10 md:py-6">
            Explore Templates
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img
          src={svgs.herotwo}
          alt=""
          className="w-64 h-64 md:w-full md:h-full"
        />
      </div>
    </div>
  );
};

export default Explore;
