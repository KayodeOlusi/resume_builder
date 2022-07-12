import { FC } from "react";
import { svgs } from "../../constants";

const Register: FC = () => {
  return (
    <div className="mt-36 flex items-center justify-between">
      <div className="hero__image">
        <img src={svgs.register} alt="register" />
      </div>
      <div className="hero__text w-[35.938rem]">
        <h1 className="text-4xl leading-10 text-herotext font-semibold">
          You have the skills, we know it, let your resume prove it.
        </h1>
        <div className="w-[32.938rem] mt-4">
          <h4 className="font-semibold text-base text-hero">
            Many times all you need is the right resume for the application
            process, and the job is yours. With Alium, with out thousands of
            well tested resume templates we are certain to give you the right
            match that will be suitabke for the role you are going for, give us
            a today
          </h4>
        </div>
        <div className="mt-4">
          <button className="bg-herobtn rounded-sm text-white px-10 py-6">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
