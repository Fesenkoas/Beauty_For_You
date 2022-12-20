import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className=" p-3 text-2xl text-cyan-50 bg-blue-900 text-center">
        ADMIN PANEL
      </div>
      <NavLink className="w-full p-3 text-cyan-50" to={"/admin/add"}>
        Add Item
      </NavLink>
      <NavLink className="w-full p-3  text-cyan-50" to={"/admin/list_items"}>
        Items
      </NavLink>
      <NavLink className="w-full p-3  text-cyan-50" to={"/admin/client"}>
        Clients
      </NavLink>
    </div>
  );
};
