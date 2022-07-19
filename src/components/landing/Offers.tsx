import { FC } from "react";
import { svgs } from "../../constants";

const Offers: FC = () => {
  return (
    <div data-testid="offers" className="mt-36">
      <div className="mb-9">
        <h1 className="text-center text-herotext text-[1.56rem] font-semibold">
          What We Offer You
        </h1>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="landing-card flex justify-center items-center mt-9 md:mt-0">
          <div className="mb-3 md:mb-0">
            <div className="flex items-center justify-center pb-9">
              <img src={svgs.share} alt="sharable" />
            </div>
            <div className="text-center w-72">
              <h3 className="text-herotext font-semibold text-xl">
                Easily Sharable
              </h3>
              <p className="pt-4 px-6 text-sm md:px-0 md:text-base text-hero">
                Share your resumes to various sites without it loosing its
                visual appeal or quality.
              </p>
            </div>
          </div>
        </div>
        <div className="landing-card flex justify-center items-center mt-9 md:mt-0">
          <div>
            <div className="flex items-center justify-center pb-9">
              <img src={svgs.chart} alt="track" />
            </div>
            <div className="text-center w-72">
              <h3 className="text-herotext font-semibold text-xl">
                Track Results
              </h3>
              <p className="pt-4 px-6 text-sm md:px-0 md:text-base text-hero">
                Our system automatically checks application success to improve
                future applications.
              </p>
            </div>
          </div>
        </div>
        <div className="landing-card flex justify-center items-center mt-9 md:mt-0">
          <div>
            <div className="flex items-center justify-center pb-9">
              <img src={svgs.thumb} alt="feedback" />
            </div>
            <div className="text-center w-72">
              <h3 className="font-semibold text-herotext text-xl">
                Get Feedback
              </h3>
              <p className="pt-4 px-6 text-sm md:px-0 md:text-base text-hero">
                We always ensure employers give feedback on submitted
                applications for reference sake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
