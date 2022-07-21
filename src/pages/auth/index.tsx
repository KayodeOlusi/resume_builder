import Button from "../../components/auth/Button";
import SignUpForm from "../../components/auth/SignUpForm";
import { svgs } from "../../constants";

const SignUp = () => {
  return (
    <div className="mt-14">
      <h1 className="text-herotext text-left font-semibold text-3xl leading-10">
        You are just a sign up away <br /> from being hired.
      </h1>
      <p className="font-semibold mt-4">
        Already have an account? <span className="text-alium">Sign In</span>
      </p>

      <div className="flex">
        <div className="flex-1 mr-5">
          <Button svg={svgs.google_icon} title="Sign Up With Google" />
          <Button svg={svgs.linkedin} title="Sign Up With Linkedin" blue_bg />
          <p className="text-center font-semibold">O R</p>
          <SignUpForm />
          <p className="font-semibold text-sm text-links">
            By signing up you agree to Alium’s terms and conditions. You can
            read them here{" "}
            <span className="text-alium">
              Privacy Policy | Terms and Conditions
            </span>{" "}
            but we both know you won’t.
          </p>
        </div>
        <div className="hidden lg:block">
          <img src={svgs.login} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
