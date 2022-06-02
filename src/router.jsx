import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Cart from "./views/Cart/Cart";

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}
