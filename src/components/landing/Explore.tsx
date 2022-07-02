import { FC } from "react";
import { images } from "../../constants";

const Explore: FC = () => {
  return (
    <div className="mt-36 flex items-center justify-between">
      <div className="hero__text w-[575px]">
        <h1 className="text-4xl leading-10 text-herotext font-semibold">
          <span className="text-alium">Alium</span> gives you the perfect resume
          for your desired job.
        </h1>
        <div className="w-[460px] mt-4">
          <h4 className="font-semibold text-base text-hero">
            It takes only a few seconds for recruiters to decide if you are the
            right pick for their vacancy. You need to make them curious enough
            to make them invite you for the interview. That is where we come in
            our templates are proven to be the best world wide for landing jobs!
          </h4>
        </div>
        <div className="mt-4">
          <button className="bg-herobtn rounded-sm text-white px-10 py-6">
            Explore Templates
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img src={images.herotwo} alt="" />
      </div>
    </div>
  );
};

export default Explore;
