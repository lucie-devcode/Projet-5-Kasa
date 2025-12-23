import React from "react";
import "./Banner.scss";

function Banner({ hideText = false, image }) {
  return (
    <div className="banner">
      <img src={image} alt="photo de bannière" />
      {!hideText && (
        <div className="banner-text">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      )}
    </div>
  );
}

export default Banner;
