import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const User = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  const logout = () => {
    signOut(auth);
    setOpen(false);
    localStorage.removeItem("user_alium");
    localStorage.removeItem("resumeName");
    localStorage.removeItem("resumeImage");
  };

  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div className="hidden lg:block">
          <Menu.Button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center w-full justify-center rounded-md
           bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {user && (
              <div className="hidden items-center lg:flex lg:space-x-10">
                <p className="font-semibold text-herotext text-sm">
                  {user?.displayName?.split(" ")[0]}
                </p>
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="h-10 w-10 cursor-pointer rounded-full md:block"
                  />
                ) : (
                  <div
                    className="h-10 w-10 rounded-full bg-slate-600 font-medium text-white
                    flex items-center justify-center"
                  >
                    {user.email ? user.email[0].toUpperCase() : ""}
                  </div>
                )}
              </div>
            )}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-alium hover:text-alium"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        {open && (
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute right-0 mt-2 w-56 origin-top-right divide-y
              divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5
              focus:outline-none"
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logout}
                      className={`font-bold ${
                        active ? "bg-alium text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        )}
      </Menu>
    </div>
  );
};

export default User;
