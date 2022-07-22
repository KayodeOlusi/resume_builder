import { FC } from "react";
import Visuals from "../../components/steps/Visuals";

const Steps: FC = () => {
  return (
    <div className="mt-20 px-8 lg:px-0">
      <h1 className="text-center text-alium font-semibold text-2xl lg:text-4xl">
        Let us get you your dream job in 3 steps.
      </h1>
      <p className="text-center text-herotext font-semibold text-base mt-5">
        It is as easy as 1, 2, yes, you get the point. Shall we?
      </p>
      <Visuals />
      <div className="text-center md:mt-8 lg:mt-20">
        <button
          className="bg-herobtn rounded-sm text-white px-6 py-4 mb-6 text-xs
         md:mb-0 md:px-5 xl:px-10 xl:py-6"
        >
          Build My Resume
        </button>
      </div>
    </div>
  );
};

export default Steps;
