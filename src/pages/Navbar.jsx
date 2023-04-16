import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.scss";
import { linksNavbar } from "../data/data";
import Logo from "../components/Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav>
      <div>
        <Logo />
      </div>
      <button className="menuButton" onClick={handleClick}>
        {open ? (
          <FontAwesomeIcon icon={faTimes} className="menu-close" size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" />
        )}
      </button>
      <ul className={`links ${open ? "active" : ""}`}>
        {linksNavbar.map((link) => (
          <li key={link.id}>
            <a href={link.to} onClick={closeMenu}>
              {link.texto}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
