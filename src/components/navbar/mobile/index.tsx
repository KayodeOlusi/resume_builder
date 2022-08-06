import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { LogoutIcon, XIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

interface ILinks {
  name: string;
  path: string;
}

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  links: ILinks[];
}

const Mobile = ({ open, setOpen, links }: IProps) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const variants = {
    hidden: {
      x: 300,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const logout = () => {
    signOut(auth);
    setOpen(false);
    localStorage.removeItem("user_alium");
  };

  return (
    <motion.div
      className="top-0 right-0 fixed z-50 overflow-x-hidden overflow-y-hidden
       h-screen w-3/5 bg-slate-100 lg:hidden"
      variants={variants}
      initial="hidden"
      animate={open ? "visible" : "hidden"}
    >
      <div className="flex flex-row-reverse">
        <XIcon
          onClick={() => setOpen(false)}
          className="w-5 h-5 ml- mt-8 mr-3 text-alium"
        />
      </div>

      <motion.div
        className="flex flex-col mt-10 ml-6 justify-between"
        variants={container}
      >
        {links.map((link) => (
          <motion.p
            variants={items}
            key={link.name}
            className="mt-12 text-sm"
            onClick={() => {
              navigate(`${link.path.toLocaleLowerCase()}`);
              setOpen(false);
            }}
          >
            {link.name}
          </motion.p>
        ))}
      </motion.div>
      <div className="ml-6 mt-10">
        {user ? (
          <>
            <p className="font-semibold text-herotext text-sm">
              {user?.displayName}
            </p>
            <div className="flex items-center space-x-3 mt-8">
              <p className="cursor-pointer text-xs font-bold">Sign Out</p>
              <LogoutIcon className="w-4 h-4" onClick={logout} />
            </div>
          </>
        ) : (
          <div>
            <p
              className="text-sm font-bold"
              onClick={() => {
                navigate("/signin");
                setOpen(false);
              }}
            >
              Sign In
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Mobile;
