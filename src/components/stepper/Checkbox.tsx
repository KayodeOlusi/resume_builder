interface IProps {
  title: string;
  checked: boolean;
  stepperNumber: number;
}

const Checkbox = ({ title, checked, stepperNumber }: IProps) => {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={checked}
        name={title}
        id={String(stepperNumber)}
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
