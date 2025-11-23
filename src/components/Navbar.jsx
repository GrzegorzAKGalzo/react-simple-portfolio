import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <nav>
      <div className="navbar-brand text-bold">
        <span className="navbar-brand-logo">GL</span> Grzegorz
      </div>
      <div className={`navbar-links ${isMenuVisible && "active"}`}>
        <div
          className="sm-hidden navbar-menu-close"
          onClick={() => {
            setIsMenuVisible(false);
          }}
        >
          <CloseIcon />
        </div>
        <NavLink
          className="navbar-link"
          to="#about"
          onClick={() => {
            setIsMenuVisible(false);
          }}
        >
          O mnie
        </NavLink>
        <NavLink
          className="navbar-link"
          to="#showcase"
          onClick={() => {
            setIsMenuVisible(false);
          }}
        >
          Portfolio
        </NavLink>
        <NavLink
          className="navbar-link"
          to="#contact"
          onClick={() => {
            setIsMenuVisible(false);
          }}
        >
          Kontakt
        </NavLink>
        <NavLink className="navbar-link navbar-link-cta" to="#contact">
          Wycena
        </NavLink>
      </div>
      <div
        className="hamburger-menu sm-hidden"
        onClick={() => {
          setIsMenuVisible(true);
        }}
      >
        <MenuIcon />
      </div>
    </nav>
  );
}
export default Navbar;
