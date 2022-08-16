import {
  selectError,
  selectPosts,
  selectStatus,
} from "../../features/slice/blog";
import { useAppSelector } from "../../app/hooks";
import Tags from "../../components/blog/Tags";
import Feed from "../../components/blog/Feed";
import Stories from "../../components/blog/Stories";

const Blog = () => {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  return (
    <div>
      <div className="sticky top-8 md:top-16 z-30">
        <Stories />
      </div>
      <div className="block md:flex md:justify-between md:space-x-3 lg:space-x-0 mt-9">
        <Feed posts={posts} status={status} error={error} />
        <Tags posts={posts} />
      </div>
    </div>
  );
};

export default Blog;
