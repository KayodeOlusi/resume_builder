import {
  FC,
  Dispatch,
  Fragment,
  useState,
  ChangeEvent,
  SetStateAction,
} from "react";
import toast from "react-hot-toast";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../app/hooks";
import { addPost } from "../../features/slice/blog";
import { Dialog, Transition } from "@headlessui/react";
import { useAuthState } from "react-firebase-hooks/auth";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

interface IPostForm {
  title: string;
  tags: string;
  body: string;
  image_url: string;
}

const Modal: FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const [postForm, setPostForm] = useState<IPostForm>({
    title: "",
    tags: "",
    body: "",
    image_url: "",
  });

  // Change event
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostForm({ ...postForm, [name]: value });
  };

  // Check if all fields are filled
  const isFormValid = () => {
    return (
      postForm.title.length > 0 &&
      postForm.body.length > 0 &&
      postForm.image_url.length > 0
    );
  };

  const addNewPost = async () => {
    setIsModalOpen(false);
    const post_notification = toast.loading("Posting...");
    const { body, image_url, title } = postForm;
    const tags = postForm.tags.split(" ").map(tag => tag.trim()) || [];
    const author = user?.displayName;

    const postToAdd = {
      body,
      author,
      tags,
      image_url,
      title,
    };
    try {
      await dispatch(addPost(postToAdd));

      toast.success("Posted successfully", {
        duration: 6000,
        id: post_notification,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          duration: 6000,
          id: post_notification,
        });
        console.log(error);
        return;
      }
    }
  };

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      {isModalOpen && (
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden
               rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-900"
                  >
                    Create a new post
                  </Dialog.Title>
                  <div className="px-5 text-center">
                    <div className="mt-3">
                      <p className="font-bold capitalize mb-1">Title</p>
                      <input
                        required
                        type="text"
                        name="title"
                        value={postForm.title}
                        onChange={handleChange}
                        placeholder="Enter Title"
                        className="bg-landingcard rounded-sm w-full text-sm p-2"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="font-bold capitalize mb-1">Tags</p>
                      <input
                        type="text"
                        name="tags"
                        required
                        value={postForm.tags}
                        onChange={handleChange}
                        placeholder="Enter #tags (Optional)"
                        className="bg-landingcard rounded-sm w-full p-2 text-sm"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="font-bold capitalize mb-1">Image URL</p>
                      <input
                        required
                        type="text"
                        name="image_url"
                        onChange={handleChange}
                        value={postForm.image_url}
                        placeholder="Enter Image URL"
                        className="bg-landingcard rounded-sm w-full p-2 text-sm"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="font-bold capitalize mb-1">Body</p>
                      <textarea
                        name="body"
                        required
                        rows={6}
                        onChange={handleChange}
                        value={postForm.body}
                        placeholder="Enter Body of Post"
                        className="bg-landingcard rounded-sm w-full p-2 text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={addNewPost}
                      disabled={isFormValid() === false}
                      className={`bg-herobtn font-bold text-xs px-5 py-2 rounded-md text-white ${
                        isFormValid() === false && "bg-slate-100 text-slate-500"
                      }`}
                    >
                      Add Post
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      )}
    </Transition>
  );
};

export default Modal;
