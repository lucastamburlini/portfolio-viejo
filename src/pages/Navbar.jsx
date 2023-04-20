import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/navbar.scss";
import { linksNavbar } from "../data/data";
import Logo from "../components/Logo";
import Themes from "../components/Themes";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showThemes, setShowThemes] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setShowThemes(false);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleThemesClick = () => {
    setShowThemes(!showThemes);
  };

  return (
    <>
      <div style={{ display: showThemes ? "block" : "none" }}>
        <Themes />
      </div>
      <nav>
        <div>
          <Logo />
        </div>

        <div className="menu-container">
          <div className="menu-themes" onClick={handleThemesClick}>
            <ImagesearchRollerOutlinedIcon />
          </div>

          <div className="menu-button" onClick={handleClick}>
            {open ? (
              <CloseIcon className="menu-close" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </div>
          <ul className={`links ${open ? "active" : ""}`}>
            {linksNavbar.map((link) => (
              <li key={link.id}>
                <a href={link.to} onClick={closeMenu}>
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
