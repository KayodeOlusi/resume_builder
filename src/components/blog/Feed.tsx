import { FC } from "react";
import Reactions from "./Reactions";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

interface IProps {
  posts: IEditedBlogState[];
  status: string;
  error: string | null;
}

const Feed: FC<IProps> = ({ posts = [], error, status }) => {
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {posts?.map((post) => {
        const { _id, body, tags, title, author, image_url, created_at } = post;

        return (
          <div key={_id} className="max-w-xl mb-9 bg-gray-100 rounded-sm p-4">
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
                src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
                className="w-full h-64 object-cover rounded-sm"
              />
            )}
            <p className="text-xs md:text-sm mt-3">
              {body} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia asperiores consectetur porro nihil eos vero odio. Ipsam
              fugiat facilis commodi tenetur temporibus, deserunt, enim libero
              porro, accusantium cupiditate cumque impedit.{" "}
            </p>
            {/***TODO: When API is done, uncomment */}
            {/* <div className="flex flex-row mt-2 space-x-2">
              {tags.map((tag) => (
                <p className="text-xs text-links" key={tag}>
                  #{tag}
                </p>
              ))}
            </div> */}
            <Reactions post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
