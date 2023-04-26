import React from "react";
import { tools } from "../../data/data.js";
import "../../styles/tools.scss";

const Tools = () => {
  return (
    <section className="tools-container">
      {tools.map((tool) => (
        <div key={tool.category}>
          <h1>{tool.category}</h1>
          <div className="tool-skill-container">
            {tool.items.map((item) => (
              <div className="tool-items" key={item.name}>
                <div className="tool-icon">{item.icon}</div>
                <h2 className="tool-name">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tools;
