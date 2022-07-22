import { FC } from "react";
import { svgs } from "../../constants";

const Visuals: FC = () => {
  return (
    <div
      className="mt-14 grid grid-rows-3 grid-flow-col gap-4
     lg:grid-cols-5 lg:grid-rows-1 lg:grid-flow-row"
    >
      <div className="text-center flex flex-col space-y-4 items-center">
        <img src={svgs.template} alt="t" />
        <h6 className="font-semibold text-herotext text-xl">Step 1</h6>
        <p className="text-sm font-semibold text-hero">
          Select your preferred template
        </p>
      </div>
      <hr className="bg-alium w-56 h-2 mt-20 hidden lg:inline-block" />
      <div className="text-center flex flex-col space-y-4 items-center">
        <img src={svgs.edit} alt="e" />
        <h6 className="font-semibold text-herotext text-xl">Step 2</h6>
        <p className="text-sm font-semibold text-hero">
          Fill using your details.
        </p>
      </div>
      <hr className="bg-alium w-56 h-2 hidden mt-20 lg:inline-block" />
      <div className="text-center flex flex-col space-y-4 items-center">
        <img src={svgs.download} alt="d" />
        <h6 className="font-semibold text-herotext text-xl">Step 3</h6>
        <p className="text-sm font-semibold text-hero">
          Download and stun your employers.
        </p>
      </div>
    </div>
  );
};

export default Visuals;
