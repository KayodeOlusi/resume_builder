import React, { FC } from "react";
import { svgs } from "../../constants";

const Navbar: FC = () => {
  const nav_links = ["Templates", "Resume Builder", "Blog", "Contact"];

  return (
    <nav className="flex items-center justify-between px-7 md:px-0">
      <div className="flex items-center justify-between space-x-2 md:space-x-4">
        <img src={svgs.star} alt="star" className="w-5 h-5 md:w-8 md:h-8" />
        <h3 className="text-alium font-bold text-base md:text-2xl">Alium</h3>
      </div>
      <div className="hidden lg:flex lg:space-x-10">
        {nav_links.map((link, index) => (
          <p key={link} className="font-semibold">
            {link}
          </p>
        ))}
      </div>
      <div className="hidden items-center lg:flex lg:space-x-10">
        <div className="border-2 border-alium p-2 rounded-sm">
          <h3 className="font-semibold">Sign In</h3>
        </div>
        <div className="bg-alium p-2 text-white rounded-sm">
          <h3 className="font-semibold">Sign Up</h3>
        </div>
      </div>
      <div className="block lg:hidden">
        <img src={svgs.menu} alt="menu" className="w-5 h-5" />
      </div>
    </nav>
  );
};

export default Navbar;
