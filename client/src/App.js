import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Content } from "./components/Content";
import { LayoutAdmin } from "./components/LayoutAdmin";
import { ListItems } from './components/ListItems';
import { Clients } from './components/Clients';

const App = () => {
  return (
    <LayoutAdmin>
      <Routes>
        <Route path="/list_items" element={<ListItems />}/>
        <Route path="/add" element={<Content />}/>
        <Route path="/client" element={<Clients />}/>
      </Routes>
    </LayoutAdmin>
  );
}

export default App;
