import Button from "../../components/auth/Button";
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

      <Button svg={svgs.google_icon} title="Sign Up With Google" />
      <Button svg={svgs.linkedin} title="Sign Up With Linkedin" blue_bg />
    </div>
  );
};

export default SignUp;
