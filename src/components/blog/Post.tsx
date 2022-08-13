import { FC } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteBlogPost, selectSinglePost } from "../../features/slice/blog";
import Reactions from "./Reactions";

const Post: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const singlePost: IEditedBlogState = useAppSelector((state) =>
    selectSinglePost(state, id!)
  )!;
  const { _id, author, body, created_at, image_url, tags, title } = singlePost;

  // TODO: Delete functionality not updated on backend yet
  const deletePost = async (id: string | number) => {
    const delete_notification = toast.loading("Deleting...");

    try {
      await dispatch(deleteBlogPost(id));
      toast.success("Post deleted successfully", {
        id: delete_notification,
        duration: 3000,
      });
      navigate("/blog");
    } catch (error) {
      toast.error("Error deleting post", {
        id: delete_notification,
        duration: 3000,
      });
      return;
    }
  };

  return (
    <>
      <div className="mt-9 bg-gray-100 max-w-xl mx-auto p-4 rounded-md">
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
        <p className="text-xs md:text-sm mt-3">
          {body} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia asperiores consectetur porro nihil eos vero odio. Ipsam fugiat
          facilis commodi tenetur temporibus, deserunt, enim libero porro,
          accusantium cupiditate cumque impedit.{" "}
        </p>
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
        <Reactions post={singlePost} />
      </div>
      <div className="text-center mt-7">
        <button
          className="bg-red-400 text-white font-bold px-8 py-3 mb-2 rounded-md"
          onClick={() => deletePost(_id)}
        >
          Delete Post
        </button>
      </div>
    </>
  );
};

export default Post;
