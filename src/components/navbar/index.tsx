import React, { FC } from "react";
import { images } from "../../constants";

const Navbar: FC = () => {
  const nav_links = ["Templates", "Resume Builder", "Blog", "Contact"];

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center justify-between space-x-4">
        <img src={images.star} alt="star" className="w-8 h-8" />
        <h3 className="text-alium font-bold text-2xl">Alium</h3>
      </div>
      <div className="flex space-x-10">
        {nav_links.map((link, index) => (
          <p key={link} className="font-semibold">
            {link}
          </p>
        ))}
      </div>
      <div className="flex space-x-10 items-center">
        <div className="border-2 border-alium p-2 rounded-sm">
          <h3 className="font-semibold">Sign In</h3>
        </div>
        <div className="bg-alium p-2 text-white rounded-sm">
          <h3 className="font-semibold">Sign Up</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
