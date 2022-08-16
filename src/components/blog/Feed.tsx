import { FC } from "react";
import Spinner from "react-spinkit";
import SinglePost from "./SinglePost";

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
    return (
      <div className="flex items-center justify-center w-full">
        <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
      </div>
    );
  }

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <SinglePost key={post._id} post={post} />)
      ) : (
        <div className="mr-auto ml-auto">
          <p className="text-center font-semibold">Add a Post</p>
        </div>
      )}
    </div>
  );
};

export default Feed;
