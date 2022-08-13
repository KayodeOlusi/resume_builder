import { useCallback, useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { faker } from "@faker-js/faker";
import { auth } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import Story from "./Story";
import Modal from "./Modal";
import toast from "react-hot-toast";

interface IStories {
  id: string | number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string | number;
}

const Stories = () => {
  const [user] = useAuthState(auth);
  const [stories, setStories] = useState<IStories[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const generateFakeUsers = useCallback(() => {
    const fakeData = [...Array(40)].map(() => {
      return {
        id: uuidv4(),
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
      };
    });

    setStories([...fakeData]);
  }, []);

  const handleModalOpen = (): void => {
    if (!user) {
      toast.error("You must be logged in to post");
      return;
    }
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    generateFakeUsers();
  }, [generateFakeUsers]);

  return (
    <>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      <div className="flex space-x-4 px-5 items-center md:px-0">
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
