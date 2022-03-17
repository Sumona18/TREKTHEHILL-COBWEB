import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import nerve from "./images/nerve.png";

function SignIn() {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">
        Sign up
      </NavLink>
    </li>
  );
}

function SignOut({ handleLoggedIn }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to="/" onClick={handleLoggedIn}>
        Sign out
      </NavLink>
    </li>
  );
}

function Navigation({ isLoggedIn, handleLoggedIn }) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light bg-white">
        <div className="container">
          <NavLink className="navbar-brand" to="/">

            <b>The Nerve Guru  </b>
            <img className="nerve" src={nerve} alt="error" />


          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              {(isLoggedIn)
                ? <SignOut handleLoggedIn={handleLoggedIn} />
                : <SignIn />
              }
              <li className="nav-item">
                <NavLink className="nav-link" to="/calming">
                  Calming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;