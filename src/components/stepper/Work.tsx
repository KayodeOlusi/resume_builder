import { Dispatch, SetStateAction } from "react";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Work = ({ formData, setFormData }: IProps) => {
  return <div>Work</div>;
};

export default Work;
