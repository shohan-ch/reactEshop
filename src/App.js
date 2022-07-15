import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


export default ()=> {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>

    </div>
  );
}


