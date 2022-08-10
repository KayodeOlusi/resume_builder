import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { useCallback, useEffect, useState } from "react";
import Story from "./Story";

interface IStories {
  id: string | number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string | number;
}

const Stories = () => {
  const [stories, setStories] = useState<IStories[]>([]);

  const generateFakeUsers = useCallback(() => {
    const fakeData = [...Array(20)].map(() => {
      return {
        id: uuidv4(),
        name: faker.name.findName(),
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
    <div
      className="flex space-x-2 overflow-x-scroll rounded-sm border
   border-gray-200 bg-white p-6 "
    >
      {stories.map((story) => (
        <Story />
      ))}
    </div>
  );
};

export default Stories;
