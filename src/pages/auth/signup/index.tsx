import { svgs } from "../../../constants";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// Components
import Button from "../../../components/auth/Button";
import SignUpForm from "../../../components/auth/SignUpForm";
import LoginSvg from "../../../components/svgs/LoginSvg";

const SignUp = () => {
  const navigate = useNavigate();

  const text_variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const para_variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  return (
    <div className="mt-14 px-7 md:px-0">
      <motion.h1
        variants={text_variants}
        initial="hidden"
        animate="visible"
        className="text-herotext text-left font-semibold text-lg leading-6 md:text-xl lg:leading-10 lg:text-3xl"
      >
        You are just a sign up away <br /> from being hired.
      </motion.h1>
      <motion.p
        variants={para_variants}
        initial="hidden"
        animate="visible"
        className="font-semibold mt-4 text-sm md:text-base"
      >
        Already have an account?{" "}
        <span className="text-alium" onClick={() => navigate("/signin")}>
          Sign In
        </span>
      </motion.p>

      <div className="flex">
        <div className="flex-1 mr-0 lg:mr-5">
          <Button svg={svgs.google_icon} title="Sign Up With Google" google />
          <p className="text-center font-semibold">O R</p>
          <SignUpForm />
          <p className="font-semibold text-xs text-links md:text-sm lg:text-base mb-4">
            By signing up you agree to Alium’s terms and conditions. You can
            read them here{" "}
            <span className="text-alium">
              Privacy Policy | Terms and Conditions
            </span>
          </p>
        </div>
        <div className="hidden lg:block lg:w-[30.75rem] lg:h-[30.75rem] xl:w-fit xl:h-fit">
          <LoginSvg />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
