import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchPosts } from "../../features/slice/blog";

const Blog = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return <div>index</div>;
};

export default Blog;
