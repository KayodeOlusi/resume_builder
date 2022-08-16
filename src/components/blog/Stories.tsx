import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Story from "./Story";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { useAppSelector } from "../../app/hooks";
import { selectStories } from "../../features/slice/blog";

const Stories = () => {
  const [user] = useAuthState(auth);
  const stories = useAppSelector(selectStories);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = (): void => {
    if (!user) {
      toast.error("You must be logged in to post");
      return;
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      <div className="flex space-x-4 bg-white px-5 items-center md:px-0">
        <div
          className="mt-6 flex space-x-2 max-w-6xl overflow-x-scroll rounded-sm border
        border-gray-100 bg-white p-3 scrollbar-thin scrollbar-thumb-black"
        >
          {stories.map((story) => (
            <Story key={story.id} {...story} />
          ))}
        </div>
        <div>
          <PlusCircleIcon
            className="w-6 h-6 mt-6 cursor-pointer"
            onClick={handleModalOpen}
          />
        </div>
      </div>
    </>
  );
};

export default Stories;
