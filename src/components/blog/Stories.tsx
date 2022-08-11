import { useCallback, useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import Modal from "./Modal";

interface IStories {
  id: string | number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string | number;
}

const Stories = () => {
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
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
        </div>
      </div>
    </>
  );
};

export default Stories;
