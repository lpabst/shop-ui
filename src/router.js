import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./views/About/About";
import Home from "./views/Home/Home";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}
