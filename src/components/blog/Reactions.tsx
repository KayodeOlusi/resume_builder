import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { reactionAdded } from "../../features/slice/blog";

interface IProps {
  post: IEditedBlogState;
}

const Reactions: FC<IProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const reactions = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕️",
  };

  return (
    <div className="flex space-x-2 sm:space-x-4 mt-2">
      {Object.entries(reactions).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          className="text-sm font-bold"
          onClick={() => dispatch(reactionAdded({ post, reaction: name }))}
        >
          {/* @ts-ignore */}
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default Reactions;
