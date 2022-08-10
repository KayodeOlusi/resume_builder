import { useEffect } from "react";
import {
  fetchPosts,
  selectError,
  selectPosts,
  selectStatus,
} from "../../features/slice/blog";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
    <div className="px-5 :md:px-0">
      <Stories />
      <Feed posts={posts} status={status} error={error} />
    </div>
  );
};

export default Blog;
