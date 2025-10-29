import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <h1 className="logo">Berliner Diaries</h1>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/history" onClick={() => setIsOpen(false)}>Timeline</Link>
        <Link to="/civilwar" onClick={() => setIsOpen(false)}>History</Link>
        <Link to="/tourist" onClick={() => setIsOpen(false)}>Tourism & Food</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
