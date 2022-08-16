import { FC } from "react";
import Reactions from "./Reactions";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

interface IProps {
  post: IEditedBlogState;
}

const SinglePost: FC<IProps> = ({ post }) => {
  const navigate = useNavigate();
  const { _id, body, tags, title, author, image_url, created_at } = post;

  const viewPost = (id: number | string) => {
    navigate("/blog/:" + id);
  };

  return (
    <div
      className="max-w-xl mb-9 bg-gray-100 rounded-sm p-4"
      onClick={() => viewPost(_id)}
    >
      <div className="relative flex justify-between">
        <div className="flex items-center space-x-2 mb-2">
          <p className="font-bold text-sm">{author}</p>
          <p className="text-[0.5rem] md:text-xs">{created_at}</p>
        </div>
        <div>
          <DotsHorizontalIcon className="w-6 h-6" />
        </div>
      </div>
      <p className="font-bold mb-2">{title}</p>
      {image_url && (
        <img
          src={image_url}
          alt=""
          className="w-full h-64 object-cover rounded-sm"
        />
      )}
      <p className="text-xs md:text-sm mt-3">{body}</p>
      <div className="flex flex-row mt-2 space-x-2">
        {tags?.length > 0 &&
          tags.map((tag) => {
            if (tag.length > 0) {
              return (
                <p className="text-xs text-links" key={tag}>
                  {tag}
                </p>
              );
            } else {
              return null;
            }
          })}
      </div>
      <Reactions post={post} />
    </div>
  );
};

export default SinglePost;
