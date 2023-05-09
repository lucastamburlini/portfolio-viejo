import React, { useState, useEffect } from "react";
import "../styles/codewars.scss";

const Codewars = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newImageUrl;

      if (screenWidth < 512) {
        newImageUrl =
          "https://www.codewars.com/users/lucastamburlini/badges/micro";
      } else if (screenWidth < 768) {
        newImageUrl =
          "https://www.codewars.com/users/lucastamburlini/badges/small";
      } else {
        newImageUrl =
          "https://www.codewars.com/users/lucastamburlini/badges/large";
      }

      setImageUrl(newImageUrl);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container codewars">{imageUrl && <img src={imageUrl} alt="" />}</div>
  );
};

export default Codewars;
