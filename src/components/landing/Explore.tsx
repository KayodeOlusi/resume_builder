import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { svgs } from "../../constants";
import withMotionWrap from "../../wrapper/MotionWrap";

const Explore: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      data-testid="explore"
      className="mt-24 flex flex-col-reverse items-center md:mt-36 lg:flex-row lg:justify-between"
    >
      <div className="hero__text px-4 md:px-0 md:w-[33.938rem] xl:w-[35.938rem]">
        <h1 className="text-xl text-center leading-6 text-herotext font-semibold md:text-3xl md:leading-10 lg:4xl lg:text-left">
          <span className="text-alium">Alium</span> gives you the perfect resume
          for your desired job.
        </h1>
        <div className="w-full md:text-left md:mt-8 lg:w-[28.75rem] lg:mt-4">
          <h4 className="font-semibold text-center p-5 text-sm text-hero md:text-lg md:p-0 lg:text-left">
            It takes only a few seconds for recruiters to decide if you are the
            right pick for their vacancy. You need to make them curious enough
            to make them invite you for the interview. That is where we come in
            our templates are proven to be the best world wide for landing jobs!
          </h4>
        </div>
        <div className="mt-4 text-center md:mt-12 lg:text-left">
          <button
            className="bg-herobtn mb-5 rounded-sm text-white px-6 py-4 text-xs md:mb-0 md:px-10 md:py-6"
            onClick={() => navigate("/page/templates")}
          >
            Explore Templates
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img
          src={svgs.herotwo}
          alt=""
          className="w-64 h-64 md:w-80 md:h-80 lg:h-96 lg:w-96 xl:w-full xl:h-full"
        />
      </div>
    </div>
  );
};

export default withMotionWrap(Explore);
