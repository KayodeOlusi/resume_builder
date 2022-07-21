import { FC, FormEventHandler, MouseEvent, useState } from "react";
import toast from "react-hot-toast";
import Button from "./Button";

interface IFormData {
  name: string;
  email: string;
  password: string;
}

interface IEvent {
  target: {
    name: string;
    value: string;
  };
}

const SignUpForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }: IEvent) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitForm: FormEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      console.log(formData);
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter Your Fullname"
        className="bg-landingcard w-full mt-4 mb-4 py-3 px-9 text-sm md:text-base"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Enter Your Email"
        className="bg-landingcard w-full mt-4 mb-4 py-3 px-9 text-sm md:text-base"
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Enter Your Password"
        className="bg-landingcard w-full mt-4 mb-4 py-3 px-9 text-sm md:text-base"
      />
      <Button title="Sign Up" blue_bg />
    </form>
  );
};

export default SignUpForm;
