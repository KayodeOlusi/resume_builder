import { FC } from "react";
import { image } from "../../constants";

const Testimonials: FC = () => {
  return (
    <div className="mt-36 ">
      <div className="testimonials__text mb-9">
        <h1 className="text-center text-herotext text-[1.56rem] font-semibold">
          Testimonials
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="landing-card flex justify-center items-center shadow-sm">
          <div>
            <div className="flex items-center justify-center pb-9">
              <img src={image.marcus} alt="sharable" />
            </div>
            <div className="text-center w-72">
              <h3 className="text-herotext font-semibold text-base">
                Alium helped me land my first job after a very long while, they
                are amazing! an absolute saver.
              </h3>
              <p className="pt-4 text-base text-hero italic">- Marcus Berent</p>
            </div>
          </div>
        </div>
        <div className="landing-card flex justify-center items-center shadow-sm">
          <div>
            <div className="flex items-center justify-center pb-9">
              <img src={image.courtney} alt="track" />
            </div>
            <div className="text-center w-72">
              <h3 className="text-herotext font-semibold text-base">
                I never thought landing dream jobs will be this easy, thank you
                Alium!
              </h3>
              <p className="pt-4 text-base text-hero italic">- Courtney Cook</p>
            </div>
          </div>
        </div>
        <div className="landing-card flex justify-center items-center shadow-sm">
          <div>
            <div className="flex items-center justify-center pb-9">
              <img src={image.rivers} alt="feedback" />
            </div>
            <div className="text-center w-72">
              <h3 className="font-semibold text-herotext text-base">
                I will forever be grateful to Alium for helping me get my
                current job, they are awesome.
              </h3>
              <p className="pt-4 text-base text-hero italic">
                - Christiana Rivers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
