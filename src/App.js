import React from "react";
import Nav from "./Components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home_comp/Home";
import Contact from "./Components/pages/Contact";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Product";
import "./Components/pages/general.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
