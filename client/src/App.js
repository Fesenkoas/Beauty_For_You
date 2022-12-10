import React from "react";
import "./App.css";
import { Content } from "./components/Content";

import { Sidebar } from "./components/Sidebar.jsx";

function App() {
  
  return (
    <div className="body">
     <Sidebar/>
     <Content/>
    </div>
  );
}

export default App;
