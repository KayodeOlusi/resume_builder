import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, FC, Fragment, SetStateAction } from "react";

interface IData {
  id: string | number;
  name: string;
  avatar: string;
  email: string;
  phoneNumber: string | number;
}

interface IProps {
  data: IData;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const StoryModal: FC<IProps> = ({ data, isModalOpen, setIsModalOpen }) => {
  const { name, email, avatar } = data;

  setTimeout(() => {
    setIsModalOpen(false);
  }, 4000);

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      {isModalOpen && (
        <Dialog as="div" className="relative z-50" onClose={setIsModalOpen}>
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
                    {name}
                  </Dialog.Title>
                  <p className="text-center text-xs mt-4">{email}</p>
                  <img
                    src={avatar}
                    alt=""
                    className="w-full object-cover rounded-md mt-5"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      )}
    </Transition>
  );
};

export default StoryModal;
