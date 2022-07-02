import { FC } from "react";
import { images } from "../../constants";

const Offers: FC = () => {
  return (
    <div className="mt-36">
      <div className="mb-9">
        <h1 className="text-center text-herotext text-[25px] font-semibold">
          What We Offer You
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="landing-card flex justify-center items-center">
          <div>
            <div className="flex items-center justify-center pb-9">
              <img src={images.share} alt="sharable" />
            </div>
            <div className="text-center w-72">
              <h3 className="text-herotext font-semibold text-xl">
                Easily Sharable
              </h3>
              <p className="pt-4 text-base text-hero">
                Share your resumes to various sites without it loosing its
                visual appeal or quality.
              </p>
            </div>
          </div>
        </div>
        <div className="landing-card flex justify-center items-center">
          <div>
            <div className="flex items-center justify-center pb-9">
              <img src={images.chart} alt="track" />
            </div>
            <div className="text-center w-72">
              <h3 className="text-herotext font-semibold text-xl">
                Track Results
              </h3>
              <p className="pt-4 text-base text-hero">
                Our system automtically checks application success to improve
                future applications.
              </p>
            </div>
          </div>
        </div>
        <div className="landing-card flex justify-center items-center">
          <div>
            <div className="flex items-center justify-center pb-9">
              <img src={images.thumb} alt="feedback" />
            </div>
            <div className="text-center w-72">
              <h3 className="font-semibold text-herotext text-xl">
                Get Feedback
              </h3>
              <p className="pt-4 text-base text-hero">
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
