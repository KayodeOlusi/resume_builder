import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { svgs } from "../../constants";

const Register: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      data-testid="register"
      className="mt-24 flex flex-col space-y-8 items-center md:mt-36 lg:justify-between lg:flex-row"
    >
      <div className="hero__image">
        <img
          src={svgs.register}
          alt="register"
          className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-full xl:h-full"
        />
      </div>
      <div className="hero__text px-4 mt-4 md:w-[32.938rem] md:px-0">
        <h1 className="text-xl text-center p-3 leading-6 text-herotext font-semibold md:p-0 md:text-3xl md:leading-10 lg:text-left">
          You have the skills, we know it, let your resume prove it.
        </h1>
        <div className="w-full md:mt-8 lg:mt-4 lg:text-left">
          <h4 className="font-semibold p-5 text-center text-sm text-hero md:p-0 md:text-lg lg:text-left">
            Many times all you need is the right resume for the application
            process, and the job is yours. With Alium, with out thousands of
            well tested resume templates we are certain to give you the right
            match that will be suitable for the role you are going for, give us
            a today
          </h4>
        </div>
        <div className="mt-4 text-center md:mt-12 lg:text-left">
          <button
            className="bg-herobtn rounded-sm text-white px-6 py-4 text-xs mb-4 md:mb-0 md:px-10 md:py-6"
            onClick={() => navigate("/signup")}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
