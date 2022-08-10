import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { FC } from "react";

interface IProps {
  posts: IEditedBlogState[];
  status: string;
  error: string | null;
}

const Feed: FC<IProps> = ({ posts = [], error, status }) => {
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts?.map((post) => {
        const {
          author,
          body,
          image_url,
          tags,
          _id,
          title,
          created_at,
          reactions,
        } = post;

        return (
          <div key={_id} className="mt-9 max-w-2xl bg-gray-100 rounded-sm p-4">
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
                className="w-full object-cover rounded-sm"
              />
            )}
            <p className="text-xs md:text-sm mt-3">
              {body} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia asperiores consectetur porro nihil eos vero odio. Ipsam
              fugiat facilis commodi tenetur temporibus, deserunt, enim libero
              porro, accusantium cupiditate cumque impedit.{" "}
            </p>
            <div className="flex flex-row mt-2 space-x-2">
              {tags.map((tag) => (
                <p className="text-xs text-links">#{tag}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
