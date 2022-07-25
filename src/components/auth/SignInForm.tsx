import { FC, useState } from "react";
import Button from "./Button";

interface IFormData {
  email: string;
  password: string;
}

interface IEvent {
  target: {
    name: string;
    value: string;
  };
}

const SignInForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }: IEvent) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form data-testid="form_id">
      <input
        type="email"
        name="email"
        autoComplete="on"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Your Email"
        className="bg-landingcard w-full mt-4 mb-4 py-3 px-9 text-sm md:text-base"
      />
      <input
        name="password"
        type="password"
        minLength={8}
        onChange={handleChange}
        value={formData.password}
        autoComplete="current-password"
        placeholder="Enter Your Password"
        className="bg-landingcard w-full mt-4 mb-4 py-3 px-9 text-sm md:text-base"
      />
      <Button title="Sign In" blue_bg formData={formData} sign_in />
    </form>
  );
};

export default SignInForm;
