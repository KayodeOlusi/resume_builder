import React, { FC } from "react";

interface IProps {
  title: string;
  svg?: string;
  blue_bg?: boolean;
}

const Button: FC<IProps> = ({ svg, title, blue_bg }) => {
  return (
    <div>
      <button
        className={`${
          blue_bg ? "bg-alium mt-4 mb-4 text-white" : "bg-landingcard mt-4 mb-4"
        } flex justify-center items-center space-x-4 py-3 px-9 font-semibold rounded-sm`}
      >
        <img src={svg} alt="google" />
        <p>{title}</p>
      </button>
    </div>
  );
};

export default Button;
