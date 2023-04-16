import React from "react";
import { tools } from "../../data/data.js";
import "../../styles/tools.scss";

const Tools = () => {
  return (
    <section className="tools-container">
      {tools.map((tool) => (
        <div key={tool.name} className="tool-card">
          <div className="tool-icon">{tool.icon}</div>
          <h2 className="tool-name">{tool.name}</h2>
        </div>
      ))}
    </section>
  );
};

export default Tools;
