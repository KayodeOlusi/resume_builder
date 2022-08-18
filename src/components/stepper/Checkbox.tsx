interface IProps {
  title: string;
  checked: boolean;
  stepperNumber: number;
  handleChange: (position: number) => void;
}

const Checkbox = ({ title, checked, stepperNumber, handleChange }: IProps) => {
  return (
    <div>
      <input
        type="checkbox"
        name={title}
        checked={checked}
        id={String(stepperNumber)}
        onChange={() => handleChange(stepperNumber)}
      />
      <label
        className="font-semibold text-hero text-xs ml-1 md:text-sm"
        htmlFor={title}
      >
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
