import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminPage } from "./components/AdminPage";

const App = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
