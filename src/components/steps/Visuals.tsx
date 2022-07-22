import { FC } from "react";
import { svgs } from "../../constants";

const Visuals: FC = () => {
  return (
    <div
      className="mt-14 mb-16 grid grid-rows-3 grid-flow-col gap-12
     lg:grid-cols-5 lg:grid-rows-1 lg:grid-flow-row lg:gap-4 lg:mb-0"
    >
      <div className="text-center flex flex-col space-y-4 items-center">
        <img
          src={svgs.template}
          alt="t"
          className="h-32 w-32 lg:h-fit lg:w-fit"
        />
        <h6 className="font-semibold text-herotext text-xl">Step 1</h6>
        <p className="text-sm font-semibold text-hero px-12 sm:px-16 md:px-0">
          Select your preferred template
        </p>
      </div>
      <hr className="bg-alium h-2 mt-20 hidden lg:inline-block lg:w-44 xl:w-56" />
      <div className="text-center flex flex-col space-y-4 items-center">
        <img src={svgs.edit} alt="e" className="h-32 w-32 lg:h-fit lg:w-fit" />
        <h6 className="font-semibold text-herotext text-xl">Step 2</h6>
        <p className="text-sm font-semibold text-hero px-14 sm:px-16 md:px-0">
          Fill using your details.
        </p>
      </div>
      <hr className="bg-alium h-2 hidden mt-20 lg:inline-block lg:w-44 xl:w-56" />
      <div className="text-center flex flex-col space-y-4 items-center">
        <img
          src={svgs.download}
          alt="d"
          className="h-32 w-32 lg:h-fit lg:w-fit"
        />
        <h6 className="font-semibold text-herotext text-xl">Step 3</h6>
        <p className="text-sm font-semibold text-hero px-12 sm:px-16 md:px-0">
          Download and stun your employers.
        </p>
      </div>
    </div>
  );
};

export default Visuals;
