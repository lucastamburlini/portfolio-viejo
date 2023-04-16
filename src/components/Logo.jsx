import React from "react";
import "../styles/logo.scss";

const Logo = () => {
  return (
    <div className="header-brand">
      <a href="/#home">
        <div className="header-avatar"></div>
        <div className="header-name">Lucas Tamburlini</div>
      </a>
    </div>
  );
};

export default Logo;
