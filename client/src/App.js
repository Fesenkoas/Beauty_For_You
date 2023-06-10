import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AdminPage } from "./components/AdminPage";
import { Site } from "./components/Site";

const App = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/" element={<Site />} />
    </Routes>
  );
};

export default App;
