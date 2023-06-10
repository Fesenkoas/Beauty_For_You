import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const LayoutSite = ({ children }) => {
  return (
    <div className="container mx-auto">
      <header className=" h-[50px] flex p-5 justify-between items-center ">
        <span className="flex jutify-center text-xl   text-black font-extrabold  px-1 py-2">
          LOGO
        </span>
        <NavLink className="text-xs text-gray-400 hover:text-white" to={"/"}>
          Shop
        </NavLink>
        <NavLink className="text-xs text-gray-400 hover:text-white" to={"/"}>
          Shop
        </NavLink>
        <NavLink className="text-xs text-gray-400 hover:text-white" to={"/"}>
          About as
        </NavLink>
        <span>RUS</span>
        <span>051 922 0001</span>
        <FaShoppingCart/>
      </header>
      <div className="h-[50px]">
      LayoutSite{children}
      </div>
      <footer className="bg-[#464646] h-[180px]">
        <div className=" ">footer</div>
      </footer>
    </div>
  );
};
