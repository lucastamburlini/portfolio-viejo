import React from "react";
import "../styles/footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container footer-container">
        <div>
          <p>Lucas Tamburlini - © 2023</p>
        </div>
        <div className="icons">
          <a
            href="https://www.instagram.com/l.tamburlini/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasgabrieltamburlini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/lucastamburlini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
