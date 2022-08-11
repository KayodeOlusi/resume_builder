import { useState, FC, useEffect } from "react";

interface IProps {
  posts: IEditedBlogState[];
}

const Tags: FC<IProps> = ({ posts }) => {
  const [tags, setTags] = useState<string[]>([]);

  // TODO: Get tags and display in the tags div

  return (
    <div className="relative h-fit min-w-[18rem] hidden lg:block">
      <h2 className="text-white font-bold bg-alium rounded-sm p-3">Tags</h2>
    </div>
  );
};

export default Tags;
