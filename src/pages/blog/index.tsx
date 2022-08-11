import { useEffect } from "react";
import {
  fetchPosts,
  selectError,
  selectPosts,
  selectStatus,
} from "../../features/slice/blog";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Tags from "../../components/blog/Tags";
import Feed from "../../components/blog/Feed";
import Stories from "../../components/blog/Stories";

const Blog = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Stories />
      <div className="flex justify-between mt-9">
        <Feed posts={posts} status={status} error={error} />
        <Tags posts={posts} />
      </div>
    </div>
  );
};

export default Blog;
