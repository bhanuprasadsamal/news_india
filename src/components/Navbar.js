import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ search, handleInput, getData }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img 
            src="favicon.ico" 
            alt="Logo" 
            className="d-inline-block align-text-top"
            style={{ width: "30px", height: "30px" }} 
          />
          ALL NEWS
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) => ({
                  fontWeight: 600,
                  color: isActive ? 'yellow' : 'white',
                  transition: 'color 0.3s ease',
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => ({
                  fontWeight: 600,
                  color: isActive ? 'yellow' : 'white',
                  transition: 'color 0.3s ease',
                })}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/newspaper"
                style={({ isActive }) => ({
                  fontWeight: 600,
                  color: isActive ? 'yellow' : 'white',
                  transition: 'color 0.3s ease',
                })}
              >
                News Paper
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => ({
                  fontWeight: 600,
                  color: isActive ? 'yellow' : 'white',
                  transition: 'color 0.3s ease',
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Bar */}
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search News"
          value={search}
          onChange={handleInput}
        />
        <button onClick={getData}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
