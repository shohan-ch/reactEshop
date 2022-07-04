import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


export default ()=> {
  return (
    <div>
      <h2 className="bg-red-500"> From app</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>

    </div>
  );
}


