import React from "react";
import { Route, Routes } from "react-router-dom";
import { Content } from "./Content";
import { LayoutAdmin } from "./LayoutAdmin";
import { ListItems } from "./ListItems";
import { Clients } from "./Clients";

export const AdminPage = () => {
  return (
    <LayoutAdmin>
      <Routes>
        <Route path="/add" element={<Content />} />
        <Route path="/list_items" element={<ListItems />} />
        <Route path="/client" element={<Clients />} />
      </Routes>
    </LayoutAdmin>
  );
};
