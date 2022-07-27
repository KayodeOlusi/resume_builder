import { Dispatch, SetStateAction } from "react";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Skills = ({ formData, setFormData }: IProps) => {
  return <div>Skills</div>;
};

export default Skills;
