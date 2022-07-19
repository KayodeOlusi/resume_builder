import { FC } from "react";
import { svgs } from "../../constants";

const Register: FC = () => {
  return (
    <div
      data-testid="register"
      className="mt-24 flex flex-col items-center md:flex-row md:mt-36 md:justify-between"
    >
      <div className="hero__image">
        <img
          src={svgs.register}
          alt="register"
          className="w-64 h-64 md:w-full md:h-full"
        />
      </div>
      <div className="hero__text px-4 mt-4 md:w-[32.938rem] md:px-0">
        <h1 className="text-xl text-center leading-6 text-herotext font-semibold md:text-4xl md:text-left md:leading-10">
          You have the skills, we know it, let your resume prove it.
        </h1>
        <div className="w-full mt-4 md:text-left">
          <h4 className="font-semibold text-center text-sm text-hero md:text-lg md:text-left">
            Many times all you need is the right resume for the application
            process, and the job is yours. With Alium, with out thousands of
            well tested resume templates we are certain to give you the right
            match that will be suitable for the role you are going for, give us
            a today
          </h4>
        </div>
        <div className="mt-4 text-center md:text-left">
          <button className="bg-herobtn rounded-sm text-white px-6 py-4 text-xs md:px-10 md:py-6">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
