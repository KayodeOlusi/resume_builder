import { FC } from "react";
import Button from "./Button";

const SignUpForm: FC = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter Your Fullname"
        className="bg-landingcard w-full mt-4 mb-4 py-3 px-9"
      />
      <input
        type="text"
        placeholder="Enter Your Email"
        className="bg-landingcard w-full mt-4 mb-4 py-3 px-9"
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        className="bg-landingcard w-full mt-4 mb-4 py-3 px-9"
      />
      <Button title="Sign Up" blue_bg />
    </form>
  );
};

export default SignUpForm;
