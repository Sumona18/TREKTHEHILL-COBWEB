import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Login from "./Login";
import Footer from "./Footer";
import Home from "./Home";
import Calming from "./Calming";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <Router>
        {/* <Navigation isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} /> */}
        <Routes>
          <Route path="/" element={<Navigation isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} />}>
            <Route index element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/login" element={<Login handleLoggedIn={handleLoggedIn} />} />
            <Route path="/calming" element={<Calming />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


