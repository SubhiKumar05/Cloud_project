import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Civilwar from "./pages/Civilwar";
import Tourist from "./pages/Tourist";
import About from "./pages/About";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/civilwar" element={<Civilwar />} />
        <Route path="/tourist" element={<Tourist />} />
        <Route path="/about" element={<About />} />
      </Routes>
     
    </div>
  );
}

export default App;
