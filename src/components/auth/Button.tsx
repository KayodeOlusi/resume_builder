import React, { FC } from "react";
interface IProps {
  title: string;
  svg?: string;
  blue_bg?: boolean;
}

const Button: FC<IProps> = ({ svg, title, blue_bg }) => {
  return (
    <button
      className={`${
        blue_bg ? "bg-alium mt-4 mb-4 text-white" : "bg-landingcard mt-4 mb-4"
      } flex justify-center items-center space-x-4 py-3 px-9 font-semibold rounded-sm w-full`}
    >
      {svg ? <img src={svg} alt="c" /> : null}
      <p>{title}</p>
    </button>
  );
};

export default Button;
