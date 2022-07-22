import { svgs } from "../../../constants";
import Button from "../../../components/auth/Button";
import SignInForm from "../../../components/auth/SignInForm";

const SignIn = () => {
  return (
    <div className="mt-14 px-7 md:px-0">
      <h1 className="text-herotext text-left font-semibold text-lg leading-6 md:text-xl lg:leading-10 lg:text-3xl">
        Welcome Back
      </h1>
      <p className="font-semibold mt-4 text-sm md:text-base">
        Want to join us? <span className="text-alium">Sign Up</span>
      </p>

      <div className="flex">
        <div className="flex-1 mr-0 lg:mr-5">
          <Button svg={svgs.google_icon} title="Sign In With Google" />
          <Button svg={svgs.linkedin} title="Sign In With Linkedin" blue_bg />
          <p className="text-center font-semibold">O R</p>
          <SignInForm />
          <p className="font-semibold text-xs text-links md:text-sm lg:text-base mb-4">
            By signing up you agree to Alium’s terms and conditions. You can
            read them here{" "}
            <span className="text-alium">
              Privacy Policy | Terms and Conditions
            </span>
          </p>
        </div>
        <div className="hidden lg:block lg:w-[30.75rem] lg:h-[30.75rem] xl:w-fit xl:h-fit">
          <img src={svgs.login} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
