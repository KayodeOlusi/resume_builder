import { Fragment } from "react";

interface IProps {
  title: string;
  checked: boolean;
  stepperNumber: number;
}

const Checkbox = ({ title, checked, stepperNumber }: IProps) => {
  return (
    <Fragment>
      <input
        type="checkbox"
        defaultChecked={checked}
        name={title}
        id={String(stepperNumber)}
        disabled
      />
      <label
        className="font-semibold text-hero text-xs ml-1 md:text-sm"
        htmlFor={title}
      >
        {title}
      </label>
    </Fragment>
  );
};

export default Checkbox;
