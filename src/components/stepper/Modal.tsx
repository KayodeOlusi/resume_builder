import { Fragment } from "react";
import toast from "react-hot-toast";
import { auth, db } from "../../firebase";
import { Dialog, Transition } from "@headlessui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import {
  setResumeModalState,
  selectResumeModalState,
  selectResumeId,
} from "../../features/slice/resume";
import { useNavigate } from "react-router-dom";

interface IProps {
  formData: IFormDetails;
}

export default function Modal({ formData }: IProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user] = useAuthState(auth);
  const resumeId = useAppSelector(selectResumeId);
  const resumeName = localStorage.getItem("resumeName");
  const theModalState = useAppSelector(selectResumeModalState);

  const closeModal = () => {
    dispatch(setResumeModalState({ modalState: false }));
  };

  // Create Resume
  const createResume = async () => {
    dispatch(setResumeModalState({ modalState: false }));

    if (resumeId) {
      const notification_update = toast.loading("Updating...");

      try {
        await updateDoc(doc(db, "resume", resumeId), {
          resume: {
            ...formData,
          },
        });

        toast.success("Updated successfully", {
          duration: 6000,
          id: notification_update,
        });
        navigate(
          `/page/templates/stepper:${resumeName!.toLocaleLowerCase()}/preview`
        );
      } catch (err) {
        toast.error("Error updating resume", {
          duration: 6000,
          id: notification_update,
        });
        console.log(err);
        return;
      }
    } else {
      const notification_add = toast.loading("Creating...");

      try {
        await addDoc(collection(db, "resume"), {
          user_details: {
            uid: user?.uid,
            name: user?.displayName,
            email: user?.email,
          },
          resume: {
            ...formData,
          },
        });

        toast.success("Created successfully", {
          duration: 6000,
          id: notification_add,
        });
        navigate(
          `/page/templates/stepper:${resumeName!.toLocaleLowerCase()}/preview`
        );
      } catch (err) {
        toast.error("Error creating resume", {
          duration: 6000,
          id: notification_add,
        });
        console.log(err);
        return;
      }
    }
  };

  return (
    <Transition appear show={theModalState} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-10" />
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
                className="w-full max-w-md transform overflow-hidden rounded-2xl
               bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Form Filled Successfully
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Click the button below to create your resume or go back to
                    edit the form.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent
                     bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200
                      focus:outline-none focus-visible:ring-2
                    focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={createResume}
                  >
                    Proceed
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
