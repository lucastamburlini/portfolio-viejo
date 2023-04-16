import React, { useEffect, useState } from "react";
import "../styles/themes.scss";

const themes = [
  {
    name: "Light",
    values: {
      "--color-bg": "#ffffff",
      "--color-bg-offset": "#dbdbe2",
      "--color-text": "#373a3c",
      "--color-text-offset": "#ffffff",
      "--color-primary": "#0EA293",
    },
  },
  {
    name: "Dark",
    values: {
      "--color-bg": "#000000",
      "--color-bg-offset": "#27292b",
      "--color-text": "#ffffff",
      "--color-text-offset": "#a9a9a9",
      "--color-primary": "#3385ff",
    },
  },
  {
    name: "Blue",
    values: {
      "--color-bg": "#112D4E",
      "--color-bg-offset": "#3F72AF",
      "--color-text": "#F9F7F7",
      "--color-text-offset": "#DBE2EF",
      "--color-primary": "#FFEA20",
    },
  },
  {
    name: "Green",
    values: {
      "--color-bg": "#41644A",
      "--color-bg-offset": "#263A29",
      "--color-text": "#FFFBF5",
      "--color-text-offset": "#FFFBF6",
      "--color-primary": "#E86A33",
    },
  },
  {
    name: "Food",
    values: {
      "--color-bg": "#FFF5E4",
      "--color-bg-offset": "#DEBA9D",
      "--color-text": "#373a3c",
      "--color-text-offset": "#F5E8C7",
      "--color-primary": "#DE1B4A",
    },
  },
  {
    name: "Halloween",
    values: {
      "--color-bg": "#FFA559",
      "--color-bg-offset": "#FF6000",
      "--color-text": "#000000",
      "--color-text-offset": "#D8D8D8",
      "--color-primary": "#FBF7F0",
    },
  },
];

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
