import SinglePost from "../SinglePost";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectPostsByUser } from "../../../features/slice/blog";

const UserPosts = () => {
  const { name } = useParams();
  const displayName = name?.replace(/[^a-zA-Z0-9]/g, " ");
  const userPosts = useAppSelector((state) => selectPostsByUser(state, name!));

  return (
    <div>
      <div className="mt-9">
        <h6 className="text-base md:text-3xl font-bold text-center">
          {displayName}
        </h6>
      </div>
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <div className="mt-9 bg-gray-100 max-w-xl mx-auto p-4 rounded-md">
            <SinglePost key={post._id} post={post} />
          </div>
        ))
      ) : (
        <p className="text-center mt-9 text-base font-semibold">
          User has no post
        </p>
      )}
    </div>
  );
};

export default UserPosts;
