import React from "react";
import ReactDOM from "react-dom";
import "./Styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Calming from "./components/Calming";



ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calming" element={<Calming />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);


