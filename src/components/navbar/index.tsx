import React, { FC } from "react";
import { Link } from "react-router-dom";
import { svgs } from "../../constants";

const Navbar: FC = () => {
  const nav_links = ["Templates", "Resume Builder", "Blog", "Contact"];

  return (
    <nav className="flex items-center justify-between px-7 md:px-0">
      <Link to="/">
        <div className="flex items-center justify-between space-x-2 md:space-x-4">
          <img src={svgs.star} alt="star" className="w-5 h-5 md:w-8 md:h-8" />
          <h3 className="text-alium font-bold text-base md:text-2xl">Alium</h3>
        </div>
      </Link>
      <div className="hidden lg:flex lg:space-x-10">
        {nav_links.map((link, index) => (
          <Link key={link} to={`page/${link.toLocaleLowerCase()}`}>
            <p className="font-semibold">{link}</p>
          </Link>
        ))}
      </div>
      <div className="hidden items-center lg:flex lg:space-x-10">
        <div className="border-2 border-alium p-2 rounded-sm">
          <Link to="/signin">
            <h3 className="font-semibold">Sign In</h3>
          </Link>
        </div>
        <div className="bg-alium p-2 text-white rounded-sm">
          <Link to="/signup">
            <h3 className="font-semibold">Sign Up</h3>
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <img src={svgs.menu} alt="menu" className="w-5 h-5" />
      </div>
    </nav>
  );
};

export default Navbar;
