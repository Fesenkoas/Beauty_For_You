import React from "react";
import { Route, Routes } from "react-router-dom";
import { LayoutSite } from "./LayoutSite";

export const Site = () => {
  return (
    <LayoutSite>
      <Routes>
        <Route path="/home" element={<Site />} />
      </Routes>
    </LayoutSite>
  );
};
