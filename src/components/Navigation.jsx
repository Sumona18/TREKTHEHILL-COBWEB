import React from "react";
import { NavLink } from "react-router-dom";
import nerve from "./images/nerve.png";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar  navbar-expand navbar-light bg-white">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
        
            <b>The Nerve Guru  </b>
            <img className="nerve" src={nerve} alt="error" />
           
            
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <HashLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </HashLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Sign up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/calming">
                  Calming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;