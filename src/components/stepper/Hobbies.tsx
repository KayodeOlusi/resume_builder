import { Dispatch, SetStateAction } from "react";

interface IProps {
  formData: IFormDetails;
  setFormData: Dispatch<SetStateAction<IFormDetails>>;
}

const Hobbies = ({ formData, setFormData }: IProps) => {
  return <div>Hobbies</div>;
};

export default Hobbies;
