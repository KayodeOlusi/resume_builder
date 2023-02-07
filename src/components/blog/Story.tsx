import StoryModal from "./StoryModal";
import { FC, useState, memo } from "react";

interface IProps {
  id: string | number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string | number;
}

const Story: FC<IProps> = ({ id, name, avatar, email, phoneNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const data = {
    id,
    name,
    avatar,
    email,
    phoneNumber,
  };

  return (
    <>
      {isModalOpen && (
        <StoryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={data}
        />
      )}
      <img
        alt=""
        src={avatar}
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="object contain h-14 w-14 cursor-pointer
        rounded-full border-2 border-alium p-[1.5px]
        transition duration-200 ease-out hover:scale-110"
      />
    </>
  );
};

export default memo(Story);
