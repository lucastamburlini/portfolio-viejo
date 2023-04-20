import React, { useEffect, useState } from "react";
import "../styles/themes.scss";
import { themes } from "../data/data";

function ColorOption(props) {
  const { value } = props;

  const colorBarStyle = {
    backgroundColor: value,
    height: "20px",
    width: "20px",
  };

  return <div style={colorBarStyle}></div>;
}

function Themes() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const toggleTheme = (nextTheme) => {
    setSelectedTheme(nextTheme);
    Object.entries(nextTheme.values).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  useEffect(() => {
    const initialTheme = themes.find((theme) => theme.name === "Dark");
    toggleTheme(initialTheme);
  }, []);

  return (
    <div>
      <div className="themes-container">
        {themes.map((theme, index) => (
          <div
            key={index}
            className={`theme-box ${selectedTheme === theme ? "active" : ""}`}
            onClick={() => toggleTheme(theme)}
          >
            <p>{theme.name}</p>
            <div>
              <ColorOption
                name="--color-bg"
                value={theme.values["--color-bg"]}
              />
              <ColorOption
                name="--color-bg-offset"
                value={theme.values["--color-bg-offset"]}
              />
              <ColorOption
                name="--color-text"
                value={theme.values["--color-text"]}
              />
              <ColorOption
                name="--color-text-offset"
                value={theme.values["--color-text-offset"]}
              />
              <ColorOption
                name="--color-primary"
                value={theme.values["--color-primary"]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Themes;
