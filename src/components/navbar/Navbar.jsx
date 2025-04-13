import { useState } from "react";
import { NavLink } from "react-router-dom";  // Import NavLink
import '../navbar/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Oyede Improvement Union</div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <NavLink 
            to="/" 
            className="nav-link" 
            onClick={closeNavbar} 
            activeClassName="active-link"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="nav-link" 
            onClick={closeNavbar} 
            activeClassName="active-link"
          >
            About
          </NavLink>
          <NavLink 
            to="/gallery" 
            className="nav-link" 
            onClick={closeNavbar} 
            activeClassName="active-link"
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className="nav-link" 
            onClick={closeNavbar} 
            activeClassName="active-link"
          >
            Contact
          </NavLink>
          <NavLink 
            to="/donate" 
            className="donate-btn" 
            onClick={closeNavbar} 
            activeClassName="active-link"
          >
            Donate
          </NavLink>
        </div>

        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? "✕" : "☰"}
        </div>
      </nav>

      {/* BACKDROP OVERLAY */}
      {isOpen && <div className="backdrop" onClick={closeNavbar}></div>}
    </>
  );
};

export default Navbar;