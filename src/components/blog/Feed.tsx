import { FC } from "react";
import Spinner from "react-spinkit";
import SinglePost from "./SinglePost";

interface IProps {
  status: string;
  error: string | null;
  posts: IEditedBlogState[];
}

const Feed: FC<IProps> = ({ posts = [], error, status }) => {
  if (status === "loading") {
    return (
      <div className="mt-9 flex items-center justify-center w-full">
        <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
      </div>
    );
  }

  if (status === "error") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <SinglePost key={post._id} post={post} />)
      ) : (
        <div className="mr-auto ml-auto">
          <p className="text-center font-semibold ml-5 md:ml-0">Add a Post</p>
        </div>
      )}
    </div>
  );
};

export default Feed;
