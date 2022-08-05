import { FC, useState, useEffect } from "react";
import { svgs } from "../../constants";
import LogoSvg from "../svgs/LogoSvg";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import User from "./user";
import Mobile from "./mobile";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [blur, setBlur] = useState(false);
  const nav_links = [
    { name: "Templates", path: "page/templates" },
    { name: "Resume Builder", path: "page" },
    { name: "Blog", path: "blog" },
    { name: "Contact", path: "contact" },
  ];

  const variants = {
    hidden: {
      y: -30,
    },
    visible: {
      y: 0,
    },
  };

  const blurListener = (): void => {
    if (window.scrollY > 50) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", blurListener, { passive: true });

    return () => {
      window.removeEventListener("scroll", blurListener);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky z-50 ${
          blur && "top-0 transition duration-500 ease-in-out"
        }`}
      >
        <motion.nav
          className={`flex items-center justify-between px-7 ${
            blur && "shadow-sm p-4 transition duration-500 ease-in-out bg-white"
          } md:px-0 lg:justify-around`}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            <div className="flex items-center justify-between space-x-2 md:space-x-4">
              <LogoSvg />
              <h3 className="text-alium font-bold text-base md:text-2xl">
                Alium
              </h3>
            </div>
          </Link>
          <div className="hidden lg:flex lg:space-x-10">
            {nav_links.map((link, index) => (
              <Link key={link.name} to={`${link.path.toLocaleLowerCase()}`}>
                <p className="font-semibold">{link.name}</p>
              </Link>
            ))}
          </div>
          {user ? (
            <User />
          ) : (
            <div className="hidden items-center lg:flex lg:space-x-10">
              <button
                className="border-2 border-alium p-2 rounded-sm cursor-pointer"
                onClick={() => navigate("/signin")}
              >
                <h3 className="font-semibold">Sign In</h3>
              </button>
              <button
                className="bg-alium p-2 text-white rounded-sm cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                <h3 className="font-semibold">Sign Up</h3>
              </button>
            </div>
          )}
          <div className="block lg:hidden">
            <img
              src={svgs.menu}
              alt="menu"
              className="w-5 h-5"
              onClick={() => setOpen(true)}
            />
          </div>
        </motion.nav>
      </header>
      {open && <Mobile open={open} setOpen={setOpen} links={nav_links} />}
    </>
  );
};

export default Navbar;
