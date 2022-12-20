import React from "react";
import { Sidebar } from "./Sidebar";

export const LayoutAdmin = ({ children }) => {
  return (
    <React.Fragment>
      <div className="body">
        <Sidebar />
        {children}
      </div>
    </React.Fragment>
  );
};
