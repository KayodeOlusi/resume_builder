import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAllTags } from "../../features/slice/blog";

interface IProps {
  posts: IEditedBlogState[];
}

const Tags: FC<IProps> = ({ posts }) => {
  const tags: string[] = useAppSelector(selectAllTags);

  return (
    <div className="h-fit min-w-[18rem] top-48 sticky hidden md:block">
      <h2 className="text-white font-bold bg-alium rounded-sm p-3">Tags</h2>
      {tags.length > 0 ? (
        tags.map((tag) => (
          <p key={tag} className="text-sm text-hero p-3 border font-semibold">
            {tag}
          </p>
        ))
      ) : (
        <p className="text-sm text-hero p-3 border font-semibold">No Tags</p>
      )}
    </div>
  );
};

export default Tags;
