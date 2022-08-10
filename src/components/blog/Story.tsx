import { FC } from "react";

interface IProps {
  id: string | number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string | number;
}

const Story: FC<IProps> = ({ id, name, avatar, email, phoneNumber }) => {
  return (
    <img
      src={avatar}
      alt=""
      className="object contain h-14 w-14 cursor-pointer
        rounded-full border-2 border-alium p-[1.5px]
        transition duration-200 ease-out hover:scale-110"
    />
  );
};

export default Story;
