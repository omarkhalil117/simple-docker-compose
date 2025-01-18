import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

function Navbar() {

 const styleHandler = (isActive) => 
    isActive ? "nav-link active text-white" : "nav-link text-white";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="text-white" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => styleHandler(isActive)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className={({ isActive }) => styleHandler(isActive)}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/test" className={({ isActive }) => styleHandler(isActive)}>
                Test
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
