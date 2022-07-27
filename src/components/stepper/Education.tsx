import { Dispatch, SetStateAction } from "react";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Education = ({ formData, setFormData }: IProps) => {
  return <div>Education</div>;
};

export default Education;
